using System.Security.Cryptography;

namespace HRM.Hub.Persistence.Infrastructure.Middleware;

public sealed class ProxyAuthMiddleware(
    RequestDelegate next,
    IConfiguration configuration,
    ILogger<ProxyAuthMiddleware> logger)
{
    private const string ProxyKeyHeader = "X-Internal-Proxy-Key";

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Path.StartsWithSegments("/hubs") &&
            context.Request.Headers.Upgrade.ToString().Contains("websocket", StringComparison.OrdinalIgnoreCase))
        {
            await next(context);
            return;
        }

        var expected = configuration["ProxySettings:ApiKey"];
        if (string.IsNullOrWhiteSpace(expected))
        {
            logger.LogWarning("ProxySettings:ApiKey is not configured; rejecting request to {Path}.", context.Request.Path);
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("Proxy key not configured.");
            return;
        }

        var expectedBytes = Encoding.UTF8.GetBytes(expected);
        var provided = context.Request.Headers[ProxyKeyHeader].ToArray();
        var authorized = provided.Any(p =>
            !string.IsNullOrEmpty(p) &&
            CryptographicOperations.FixedTimeEquals(Encoding.UTF8.GetBytes(p), expectedBytes));

        if (!authorized)
        {
            logger.LogWarning("Request to {Path} rejected: missing or invalid proxy key.", context.Request.Path);
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("Requests must originate from the authorized proxy.");
            return;
        }

        await next(context);
    }
}

public static class ProxyAuthMiddlewareExtensions
{
    public static IApplicationBuilder UseProxyAuthentication(this IApplicationBuilder app) =>
        app.UseMiddleware<ProxyAuthMiddleware>();
}
