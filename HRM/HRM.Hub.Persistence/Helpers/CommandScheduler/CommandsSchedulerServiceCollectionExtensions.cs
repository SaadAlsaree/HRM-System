using CommandScheduler;
using Hangfire;
using Hangfire.PostgreSql;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Data.SqlClient;

namespace CommandScheduler
{
    public static class CommandsSchedulerServiceCollectionExtensions
    {
        public static IServiceCollection AddCommandsScheduler(this IServiceCollection services, string hangfireConnection)
        {
            services.AddScoped<CommandsExecutor>();
            services.AddScoped<AsyncCommand>();


            // Add Hangfire services.
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UsePostgreSqlStorage(hangfireConnection, new PostgreSqlStorageOptions
                {

                }));

            // Add the processing server as IHostedService
            services.AddHangfireServer();

            return services;
        }
    }
}