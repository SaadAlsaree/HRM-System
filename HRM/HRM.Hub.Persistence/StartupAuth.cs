namespace HRM.Hub.Persistence;

public static class StartupAuth
{
    public static void AuthConfigure(this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<CookiePolicyOptions>(options =>
        {
            options.CheckConsentNeeded = context => true;
            options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.None;
        });
        services.AddSession(options =>
        {
            options.IdleTimeout = TimeSpan.FromHours(8);
        });

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, jwtBearerOptions =>
        {
            jwtBearerOptions.SaveToken = true;
            jwtBearerOptions.RequireHttpsMetadata = true;
            jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters()
            {

                ValidateActor = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = "https://hrm.com",
                ValidAudience = "Audience",
                SaveSigninToken = true,
                RoleClaimType = "Role",
                RequireExpirationTime = true,
                ClockSkew = TimeSpan.Zero,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("Auth:Key").Value))
            };
        });
        services.AddAuthorization(options =>
        {
            //options.AddPolicy("Attendance", policyBuilder =>
            //{
            //    policyBuilder.RequireAuthenticatedUser()
            //        .RequireAssertion(context => context.User.HasClaim("AttendanceKey", "skpZhqXGN2Ba6TQw"))
            //        .Build();
            //});
        });
    }
}