using FileSharing.HubApplication.Contracts;
using HRM.Hub.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Persistence;

public static class PersistenceContainer
{
    public static readonly LoggerFactory MyLoggerFactory =
        new(new[]
        {
                new DebugLoggerProvider()
        });
    public static void AddPersistenceServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<HumanResourcesDbContext>(options =>
            options.UseLoggerFactory(MyLoggerFactory)
                .UseNpgsql(
                configuration.GetConnectionString($"HumanResourcesDb"),
                b => b.MigrationsAssembly(typeof(HumanResourcesDbContext).Assembly.FullName)), ServiceLifetime.Scoped);

        services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
        services.AddScoped(typeof(IExtensionRepository<>), typeof(ExtensionRepository<>));
        services.AddMemoryCache();
        services.AddScoped(typeof(IRedisCacheLayer), typeof(RedisCacheLayer));

        services.AddScoped(typeof(IStorageService), typeof(StorageService));

        services.Configure<RedisCacheConnectionString>(configuration.GetSection("RedisCacheConnectionString"));
        //Add Dependency Injection
    }
}