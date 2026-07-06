using System.Text.Json;
using HRM.Hub.Persistence.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace HRM.Hub.Persistence.Identity;

public static class AuthExtensions
{
    public static IServiceCollection AddKeycloakAuthentication(
        this IServiceCollection services, KeycloakSettings settings, IHostEnvironment env)
    {
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                var backchannelHandler = CreateBackchannelHandler(settings, env);
                var backchannel = new HttpClient(backchannelHandler);
                var configurationManager = new ConfigurationManager<OpenIdConnectConfiguration>(
                    settings.MetadataAddress,
                    new OpenIdConnectConfigurationRetriever(),
                    new HttpDocumentRetriever(backchannel)
                    {
                        RequireHttps = settings.Issuer.StartsWith("https://", StringComparison.OrdinalIgnoreCase)
                    });

                options.Authority = settings.Issuer;
                options.MetadataAddress = settings.MetadataAddress;
                options.Audience = settings.Audience;
                options.IncludeErrorDetails = env.IsDevelopment();
                options.RequireHttpsMetadata =
                    settings.Issuer.StartsWith("https://", StringComparison.OrdinalIgnoreCase);
                options.Backchannel = backchannel;
                options.ConfigurationManager = configurationManager;
                options.RefreshOnIssuerKeyNotFound = true;

                options.MapInboundClaims = false;

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuers = new[] { settings.Issuer, settings.InternalIssuer },
                    ValidAudiences = new[] { settings.Audience, "account" },
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ClockSkew = TimeSpan.Zero,
                    RoleClaimType = AppClaimTypes.Role,
                    NameClaimType = AppClaimTypes.UserLogin
                };

                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        var accessToken = context.Request.Query["access_token"];
                        if (!string.IsNullOrEmpty(accessToken) &&
                            context.HttpContext.Request.Path.StartsWithSegments("/hubs"))
                        {
                            context.Token = accessToken;
                        }

                        var bearerToken = context.Token;
                        if (string.IsNullOrWhiteSpace(bearerToken) &&
                            context.Request.Headers.Authorization.Count > 0)
                        {
                            var authorization = context.Request.Headers.Authorization.ToString();
                            if (authorization.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
                            {
                                bearerToken = authorization["Bearer ".Length..].Trim();
                            }
                        }

                        if (TryReadJwtHeader(bearerToken, out var tokenAlg, out var tokenKid))
                        {
                            context.HttpContext.Items["JwtHeaderAlg"] = tokenAlg;
                            context.HttpContext.Items["JwtHeaderKid"] = tokenKid;
                        }

                        return Task.CompletedTask;
                    },
                    OnTokenValidated = context =>
                    {
                        FlattenRealmRoles(context.Principal);
                        return Task.CompletedTask;
                    },
                    OnAuthenticationFailed = async context =>
                    {
                        var logger = context.HttpContext.RequestServices
                            .GetRequiredService<ILoggerFactory>()
                            .CreateLogger("KeycloakJwt");
                        var (signingKeyCount, signingKeyKids, configurationError) =
                            await TryDescribeSigningKeysAsync(configurationManager, context.HttpContext.RequestAborted);

                        logger.LogWarning(
                            context.Exception,
                            "JWT authentication failed for {Path}. TokenAlg={TokenAlg} TokenKid={TokenKid} SigningKeyCount={SigningKeyCount} SigningKeyKids={SigningKeyKids} ConfigurationError={ConfigurationError}",
                            context.HttpContext.Request.Path,
                            context.HttpContext.Items["JwtHeaderAlg"],
                            context.HttpContext.Items["JwtHeaderKid"],
                            signingKeyCount,
                            signingKeyKids,
                            configurationError);

                        if (env.IsDevelopment())
                        {
                            context.Response.Headers["X-Auth-Error"] = context.Exception.GetType().Name;
                            context.Response.Headers["X-Auth-Error-Description"] = context.Exception.Message;
                        }
                        await Task.CompletedTask;
                    },
                    OnChallenge = async context =>
                    {
                        var logger = context.HttpContext.RequestServices
                            .GetRequiredService<ILoggerFactory>()
                            .CreateLogger("KeycloakJwt");
                        var hasAuthorizationHeader =
                            context.Request.Headers.ContainsKey("Authorization");
                        var (signingKeyCount, signingKeyKids, configurationError) =
                            await TryDescribeSigningKeysAsync(configurationManager, context.HttpContext.RequestAborted);

                        logger.LogWarning(
                            context.AuthenticateFailure,
                            "JWT challenge triggered for {Path}. HasAuthorizationHeader={HasAuthorizationHeader} Error={Error} Description={Description} TokenAlg={TokenAlg} TokenKid={TokenKid} SigningKeyCount={SigningKeyCount} SigningKeyKids={SigningKeyKids} ConfigurationError={ConfigurationError}",
                            context.Request.Path,
                            hasAuthorizationHeader,
                            context.Error,
                            context.ErrorDescription,
                            context.HttpContext.Items["JwtHeaderAlg"],
                            context.HttpContext.Items["JwtHeaderKid"],
                            signingKeyCount,
                            signingKeyKids,
                            configurationError);

                        if (env.IsDevelopment() && context.AuthenticateFailure is not null)
                        {
                            context.Response.Headers["X-Auth-Failure"] = context.AuthenticateFailure.GetType().Name;
                            context.Response.Headers["X-Auth-Error-Description"] = context.AuthenticateFailure.Message;
                        }
                        else if (env.IsDevelopment() && !hasAuthorizationHeader)
                        {
                            context.Response.Headers["X-Auth-Error"] = "MissingBearerToken";
                            context.Response.Headers["X-Auth-Error-Description"] =
                                "The request reached the API without an Authorization: Bearer header.";
                        }
                        await Task.CompletedTask;
                    }
                };
            });

        return services;
    }

    private static HttpMessageHandler CreateBackchannelHandler(KeycloakSettings settings, IHostEnvironment env)
    {
        var handler = new HttpClientHandler();

        if (env.IsDevelopment() && settings.Issuer.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
        {
            // Local Keycloak often uses a self-signed certificate in development.
            handler.ServerCertificateCustomValidationCallback =
                HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;
        }

        return handler;
    }

    private static bool TryReadJwtHeader(string? token, out string? alg, out string? kid)
    {
        alg = null;
        kid = null;

        if (string.IsNullOrWhiteSpace(token))
            return false;

        var parts = token.Split('.');
        if (parts.Length < 2)
            return false;

        try
        {
            var headerJson = Base64UrlEncoder.Decode(parts[0]);
            using var document = JsonDocument.Parse(headerJson);
            if (document.RootElement.TryGetProperty("alg", out var algElement))
            {
                alg = algElement.GetString();
            }

            if (document.RootElement.TryGetProperty("kid", out var kidElement))
            {
                kid = kidElement.GetString();
            }

            return true;
        }
        catch
        {
            return false;
        }
    }

    private static async Task<(int SigningKeyCount, string SigningKeyKids, string? ConfigurationError)>
        TryDescribeSigningKeysAsync(
            IConfigurationManager<OpenIdConnectConfiguration> configurationManager,
            CancellationToken cancellationToken)
    {
        try
        {
            var configuration = await configurationManager.GetConfigurationAsync(cancellationToken);
            var kids = configuration.SigningKeys
                .Select(static key => key.KeyId)
                .Where(static keyId => !string.IsNullOrWhiteSpace(keyId))
                .ToArray();

            return (configuration.SigningKeys.Count, string.Join(",", kids), null);
        }
        catch (Exception ex)
        {
            return (0, string.Empty, ex.Message);
        }
    }

    public static IServiceCollection AddKeycloakAuthorization(this IServiceCollection services)
    {
        services.AddAuthorization(options =>
        {
            options.FallbackPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
        });
        return services;
    }

    private static void FlattenRealmRoles(ClaimsPrincipal? principal)
    {
        if (principal?.Identity is not ClaimsIdentity identity || !identity.IsAuthenticated)
            return;

        var realmAccess = identity.FindFirst(AppClaimTypes.RealmAccess);
        if (realmAccess is null || string.IsNullOrWhiteSpace(realmAccess.Value))
            return;

        try
        {
            using var document = JsonDocument.Parse(realmAccess.Value);
            if (!document.RootElement.TryGetProperty("roles", out var rolesElement))
                return;

            foreach (var role in rolesElement.EnumerateArray())
            {
                var roleValue = role.GetString();
                if (!string.IsNullOrWhiteSpace(roleValue) &&
                    !identity.HasClaim(AppClaimTypes.Role, roleValue))
                {
                    identity.AddClaim(new Claim(AppClaimTypes.Role, roleValue));
                }
            }
        }
        catch
        {
        }
    }
}
