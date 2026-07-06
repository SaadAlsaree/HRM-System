using Microsoft.Extensions.Logging;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveImpactOrchestrator : ILeaveImpactOrchestrator
{
    private readonly IPromotionAllowanceCalculationService _calculationService;
    private readonly ILogger<LeaveImpactOrchestrator> _logger;

    public LeaveImpactOrchestrator(
        IPromotionAllowanceCalculationService calculationService,
        ILogger<LeaveImpactOrchestrator> logger)
    {
        _calculationService = calculationService;
        _logger = logger;
    }

    public async Task RecalculateAsync(Guid employeeId, string trigger, CancellationToken ct)
    {
        try
        {
            await _calculationService.CalculateAsync(employeeId, trigger, ct);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Promotion/allowance recalculation failed for employee {EmployeeId}, trigger {Trigger}", employeeId, trigger);
        }

        OnLeaveBonusImpact(employeeId, trigger);
        OnLeaveSalaryImpact(employeeId, trigger);
        OnLeaveRetirementImpact(employeeId, trigger);
    }

    protected virtual void OnLeaveBonusImpact(Guid employeeId, string trigger)
    {
        _logger.LogDebug("LeaveBonusImpact hook invoked for {EmployeeId}, trigger {Trigger} (stub)", employeeId, trigger);
    }

    protected virtual void OnLeaveSalaryImpact(Guid employeeId, string trigger)
    {
        _logger.LogDebug("LeaveSalaryImpact hook invoked for {EmployeeId}, trigger {Trigger} (stub)", employeeId, trigger);
    }

    protected virtual void OnLeaveRetirementImpact(Guid employeeId, string trigger)
    {
        _logger.LogDebug("LeaveRetirementImpact hook invoked for {EmployeeId}, trigger {Trigger} (stub)", employeeId, trigger);
    }
}
