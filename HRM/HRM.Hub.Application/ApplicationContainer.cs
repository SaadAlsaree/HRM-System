using CommandScheduler;
using HRM.Hub.Application.Behaviors;
using HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.AddMonthlyLeaveBalance;
using HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.AddMonthlyLeaveMedicalBalance;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using Hangfire;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;


namespace HRM.Hub.Application;

public static class ApplicationContainer
{
    public static void RegisterRecurringJobs(this IServiceProvider serviceProvider)
    {
        try
        {
            // Register both recurring jobs using the simpler direct approach
            RecurringJob.AddOrUpdate<AddMonthlyLeaveBalanceJob>(
                "monthly-leave-balance-update",
                job => job.Execute(),
                // "* * * * *" // Run every minute (for testing)
                "1 0 1 * *" // Run at 00:01 on the 1st day of each month (for production)
            );

            RecurringJob.AddOrUpdate<AddMonthlyLeaveMedicalBalanceJob>(
                "monthly-leave-medical-balance-update",
                job => job.Execute(),
                // "* * * * *" // Run every minute (for testing)
                "1 0 1 * *" // Run at 00:01 on the 1st day of each month (for production)
            );
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            Console.WriteLine(ex.StackTrace);
            throw; // Re-throw to ensure application startup fails if jobs can't be registered
        }
    }

    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(ApplicationContainer).Assembly);
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

        // Register Hangfire job classes
        services.AddTransient<AddMonthlyLeaveBalanceJob>();
        services.AddTransient<AddMonthlyLeaveMedicalBalanceJob>();

        services.AddTransient<IRequestHandler<ChangeStatusCommand<Guid>, Response<bool>>, ChangeStatusHandler<Guid>>();
        services.AddTransient<IRequestHandler<ChangeStatusCommand<int>, Response<bool>>, ChangeStatusHandler<int>>();
        services.AddTransient<IRequestHandler<ChangeStatusCommand<long>, Response<bool>>, ChangeStatusHandler<long>>();

        services.AddTransient<IRequestHandler<DeleteRecordCommand<Guid>, Response<bool>>, DeleteRecordHandler<Guid>>();
        services.AddTransient<IRequestHandler<DeleteRecordCommand<int>, Response<bool>>, DeleteRecordHandler<int>>();
        services.AddTransient<IRequestHandler<DeleteRecordCommand<long>, Response<bool>>, DeleteRecordHandler<long>>();

        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        return services;
    }
}

// Job class to handle leave balance updates
public class AddMonthlyLeaveBalanceJob
{
    private readonly IMediator _mediator;

    public AddMonthlyLeaveBalanceJob(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task Execute()
    {
        await _mediator.Send(new AddMonthlyLeaveBalanceCommand
        {
            AmountToAdd = 3,
            Note = "تحديث الرصيد الشهري"
        });
    }
}

// Job class to handle leave medical balance updates
public class AddMonthlyLeaveMedicalBalanceJob
{
    private readonly IMediator _mediator;

    public AddMonthlyLeaveMedicalBalanceJob(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task Execute()
    {
        await _mediator.Send(new AddMonthlyLeaveMedicalBalanceCommand
        {
            AmountToAdd = 2.5,
            Note = "تحديث الرصيد الشهري"
        });
    }
}