using CommandScheduler;
using HRM.Hub.Application.Behaviors;
using HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.AddMonthlyLeaveBalance;
using HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.AddMonthlyLeaveMedicalBalance;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.Services.PromotionAllowanceCalculation;
using HRM.Hub.Application.Features.Services.AnnualAllowanceCalculation;
using HRM.Hub.Application.Features.Services.LeaveManagement;
using HRM.Hub.Application.Features.Services.ServiceDuration;
using Hangfire;
using Microsoft.EntityFrameworkCore;
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

            RecurringJob.AddOrUpdate<RecomputeServiceDurationJob>(
                "daily-service-duration-recompute",
                job => job.Execute(),
                "0 2 * * *" // Run daily at 02:00
            );

            RecurringJob.AddOrUpdate<ExpirationNotificationJob>(
                "daily-expiration-notifications",
                job => job.Execute(),
                "0 3 * * *" // Run daily at 03:00
            );

            RecurringJob.AddOrUpdate<LeaveExpiryJob>(
                "daily-leave-expiry",
                job => job.Execute(),
                "0 1 * * *" // Run daily at 01:00
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
        services.AddAutoMapper(_ => { }, typeof(ApplicationContainer).Assembly);
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

        // Register Hangfire job classes
        services.AddTransient<AddMonthlyLeaveBalanceJob>();
        services.AddTransient<AddMonthlyLeaveMedicalBalanceJob>();
        services.AddTransient<RecomputeServiceDurationJob>();
        services.AddTransient<ExpirationNotificationJob>();
        services.AddTransient<LeaveExpiryJob>();
        services.AddScoped<IPromotionAllowanceCalculationService, PromotionAllowanceCalculationService>();
        services.AddScoped<IPromotionAllowanceAffectedEmployeeResolver, PromotionAllowanceAffectedEmployeeResolver>();
        services.AddScoped<IAnnualAllowanceCalculationService, AnnualAllowanceCalculationService>();
        services.AddScoped<ILeaveManagementService, LeaveManagementService>();
        services.AddScoped<ILeaveVerificationService, LeaveVerificationService>();
        services.AddScoped<ILeaveBalanceService, LeaveBalanceService>();
        services.AddScoped<ILeaveLifecycleService, LeaveLifecycleService>();
        services.AddScoped<ILeaveImpactOrchestrator, LeaveImpactOrchestrator>();
        services.AddScoped<ILeaveAuditService, LeaveAuditService>();

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

// Job class to recompute employee service duration daily (EMP-016)
public class RecomputeServiceDurationJob
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly ServiceDurationService _serviceDurationService;

    public RecomputeServiceDurationJob(IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryEmployee = repositoryEmployee;
        _serviceDurationService = new ServiceDurationService();
    }

    public async Task Execute()
    {
        var activeEmployees = await _repositoryEmployee.Query(
            filter: null,
            include: inc => inc
                .Include(e => e.JobInformation)
                .Include(e => e.ServiceCalculations)
                .Include(e => e.Interruptions))
            .AsNoTracking()
            .ToListAsync();

        foreach (var employee in activeEmployees)
        {
            _ = _serviceDurationService.Compute(employee);
        }
    }
}

// Job class to check for expiring affiliations and assignments daily
public class ExpirationNotificationJob
{
    private readonly IBaseRepository<Domain.Entities.Affiliation> _repositoryAffiliation;
    private readonly IBaseRepository<Domain.Entities.Assignments> _repositoryAssignment;
    private readonly IBaseRepository<TeamNotifications> _repositoryNotification;

    public ExpirationNotificationJob(
        IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation,
        IBaseRepository<Domain.Entities.Assignments> repositoryAssignment,
        IBaseRepository<TeamNotifications> repositoryNotification)
    {
        _repositoryAffiliation = repositoryAffiliation;
        _repositoryAssignment = repositoryAssignment;
        _repositoryNotification = repositoryNotification;
    }

    public async Task Execute()
    {
        var now = DateTime.Now;
        var thirtyDaysFromNow = now.AddDays(30);

        var expiringAffiliations = await _repositoryAffiliation.Query(
            filter: x => x.StatusId == Domain.Common.Enums.Status.Active && !x.IsDeleted && x.ToDate != null && x.ToDate.Value.ToDateTime(TimeOnly.MinValue) <= thirtyDaysFromNow && x.ToDate.Value.ToDateTime(TimeOnly.MinValue) >= now,
            include: null).ToListAsync();

        foreach (var affiliation in expiringAffiliations)
        {
            var existing = await _repositoryNotification.Find(x =>
                x.EmployeeId == affiliation.EmployeeId &&
                x.Type == NotificationType.AffiliationExpiry &&
                !x.IsDeleted, null);

            if (existing == null)
            {
                await _repositoryNotification.Create(new TeamNotifications
                {
                    TeamId = affiliation.EmployeeId,
                    EmployeeId = affiliation.EmployeeId,
                    Body = $"تنتهي صلاحية الندب في {affiliation.ToDate?.ToString("yyyy-MM-dd")}",
                    Note = affiliation.Id.ToString(),
                    Type = NotificationType.AffiliationExpiry,
                    NotificationDate = now
                });
            }
        }

        // Assignments use DurationOfAssignment + OrderDate to compute end date
        // Skip assignments where we can't determine the end date
        var activeAssignments = await _repositoryAssignment.Query(
            filter: x => x.StatusId == Domain.Common.Enums.Status.Active && !x.IsDeleted && x.DurationOfAssignment != null && x.OrderDate != null,
            include: null).ToListAsync();

        foreach (var assignment in activeAssignments)
        {
            var startDate = assignment.OrderDate!.Value;
            var endDate = startDate.AddMonths(assignment.DurationOfAssignment!.Value);
            var endDateTime = endDate.ToDateTime(TimeOnly.MinValue);

            if (endDateTime <= thirtyDaysFromNow && endDateTime >= now)
            {
                var existing = await _repositoryNotification.Find(x =>
                    x.EmployeeId == assignment.EmployeeId &&
                    x.Type == NotificationType.AssignmentExpiry &&
                    !x.IsDeleted, null);

                if (existing == null)
                {
                    await _repositoryNotification.Create(new TeamNotifications
                    {
                        TeamId = assignment.EmployeeId,
                        EmployeeId = assignment.EmployeeId,
                        Body = $"تنتهي صلاحية الإعارة في {endDate:yyyy-MM-dd}",
                        Note = assignment.Id.ToString(),
                        Type = NotificationType.AssignmentExpiry,
                        NotificationDate = now
                    });
                }
            }
        }
    }
}
