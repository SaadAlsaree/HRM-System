using HRM.Hub.Application;
using HRM.Hub.Persistence;
using Serilog;
using System.Threading.RateLimiting;

try
{
    AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
    var builder = WebApplication.CreateBuilder(args);
    var GetStage = builder.Configuration.GetValue<string>("Stage");
    builder = WebApplication.CreateBuilder(new WebApplicationOptions
    {
        EnvironmentName = GetStage == "PROD" ? Environments.Production : Environments.Development
    });
    builder.WebHost.UseKestrel().UseIISIntegration();
    builder.Services.AddPersistenceServices(builder.Configuration);
    builder.Services.AddApplicationServices();
    builder.Services.ConfigureServices(builder.Configuration);
    builder.Services.AuthConfigure(builder.Configuration);
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddRateLimiter(options =>
    {
        options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
        {
            return RateLimitPartition.GetFixedWindowLimiter(partitionKey: httpContext.Request.Headers.Host.ToString(), partition =>
                new FixedWindowRateLimiterOptions
                {
                    PermitLimit = 50,
                    AutoReplenishment = true,
                    Window = TimeSpan.FromSeconds(10),
                });
        });
        options.OnRejected = async (context, token) =>
        {
            context.HttpContext.Response.StatusCode = 429;
            await context.HttpContext.Response.WriteAsync("Too many requests. Please try later again... ", cancellationToken: token);
        };
    });
    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.UseRateLimiter();
    //Rate limitter middleware
    StartupConfigure.ApplicationConfigure(app, builder.Environment, builder.Configuration);

    // Register and start recurring jobs
    app.Services.RegisterRecurringJobs();

    app.Run();

    return 0;
}
catch (Exception ex)
{
    Log.Error(ex, "Host terminated unexpectedly");
    return 1;
}
finally
{
    Log.CloseAndFlush();
}

