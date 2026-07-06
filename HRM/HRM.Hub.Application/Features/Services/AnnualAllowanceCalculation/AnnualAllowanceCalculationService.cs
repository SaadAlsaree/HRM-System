using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Features.PromotionAllowanceCalculation.Models;
using HRM.Hub.Application.Features.AnnualAllowanceCalculation.Models;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.Services.AnnualAllowanceCalculation;

public class AnnualAllowanceCalculationService : IAnnualAllowanceCalculationService
{
    private readonly IPromotionAllowanceCalculationService _unifiedService;
    private readonly IBaseRepository<AnnualAllowanceRecord> _recordRepository;

    public AnnualAllowanceCalculationService(
        IPromotionAllowanceCalculationService unifiedService,
        IBaseRepository<AnnualAllowanceRecord> recordRepository)
    {
        _unifiedService = unifiedService;
        _recordRepository = recordRepository;
    }

    public async Task<AnnualAllowanceCalculationViewModel?> CalculateAsync(Guid employeeId, string trigger, CancellationToken ct)
    {
        var result = await _unifiedService.CalculateAsync(employeeId, trigger, ct);
        return MapToAllowanceViewModel(result);
    }

    public async Task<IReadOnlyList<AnnualAllowanceCalculationViewModel>> CalculateBatchAsync(IEnumerable<Guid> employeeIds, string trigger, CancellationToken ct)
    {
        var results = await _unifiedService.CalculateBatchAsync(employeeIds, trigger, ct);
        return results.Select(MapToAllowanceViewModel).ToList();
    }

    public async Task<AnnualAllowanceCalculationViewModel?> RecalculateOnChangeAsync(Guid employeeId, string trigger, CancellationToken ct)
    {
        return await CalculateAsync(employeeId, trigger, ct);
    }

    public async Task<AnnualAllowanceCalculationViewModel?> GetLatestDetailsAsync(Guid employeeId, CancellationToken ct)
    {
        var result = await _unifiedService.GetLatestDetailsAsync(employeeId, ct);
        return MapToAllowanceViewModel(result);
    }

    public async Task<bool> VerifyDataAsync(Guid employeeId, CancellationToken ct)
    {
        // Reuse existing pattern: presence of Promotion + JobInformation indicates data completeness
        // This is a placeholder; full verification rules would be added in Phase 2 when bonus lifecycle is implemented.
        var result = await _unifiedService.GetLatestDetailsAsync(employeeId, ct);
        return result != null;
    }

    public async Task ThrowIfDuplicateAsync(Guid employeeId, DateOnly allowanceDate, CancellationToken ct)
    {
        var existing = await _recordRepository.Query(x => x.EmployeeId == employeeId && x.DueDate == allowanceDate)
            .FirstOrDefaultAsync(ct);

        if (existing != null)
            throw new InvalidOperationException($"العلاوة للموظف بتاريخ {allowanceDate:yyyy-MM-dd} موجودة بالفعل.");
    }

    private static AnnualAllowanceCalculationViewModel? MapToAllowanceViewModel(PromotionAllowanceCalculationDetailsViewModel? unified)
    {
        if (unified == null)
            return null;

        return new AnnualAllowanceCalculationViewModel
        {
            RunId = unified.RunId,
            EmployeeId = unified.EmployeeId,
            Trigger = unified.Trigger,
            LastAllowanceDate = unified.AllowanceBaseDate ?? DateOnly.FromDateTime(unified.CalculatedAt),
            LegalTermMonths = unified.AllowanceBaseMonths ?? 0,
            ServiceMonths = unified.Steps.Where(s => s.CalculationKind == "Allowance" && s.StepCode == "ACTUAL_SERVICE").Sum(s => s.DeltaMonths),
            BaseDate = unified.AllowanceBaseDate ?? DateOnly.FromDateTime(unified.CalculatedAt),
            BaseDueDate = unified.AllowanceBaseDate.HasValue && unified.AllowanceBaseMonths.HasValue
                ? unified.AllowanceBaseDate.Value.AddMonths(unified.AllowanceBaseMonths.Value)
                : DateOnly.FromDateTime(unified.CalculatedAt),
            FinalDueDate = unified.AllowanceDueDate ?? DateOnly.FromDateTime(unified.CalculatedAt),
            StatusId = DetermineAllowanceStatus(unified),
            Summary = BuildAllowanceSummaryFromUnified(unified),
            CalculatedAt = unified.CalculatedAt,
            Steps = unified.Steps
                .Where(x => x.CalculationKind == "Allowance")
                .Select(x => new AnnualAllowanceCalculationStepViewModel
                {
                    StepCode = x.StepCode,
                    SourceEntityName = x.SourceEntityName,
                    SourceEntityId = x.SourceEntityId,
                    Reason = x.Reason,
                    BeforeDate = x.BeforeDate,
                    AfterDate = x.AfterDate,
                    DeltaMonths = x.DeltaMonths,
                    DeltaDays = x.DeltaDays
                })
                .ToList()
        };
    }

    private static AnnualAllowanceStatus DetermineAllowanceStatus(PromotionAllowanceCalculationDetailsViewModel unified)
    {
        var today = DateOnly.FromDateTime(DateTime.Today);

        if (unified.AllowanceDueDate.HasValue && unified.AllowanceDueDate.Value > today)
        {
            // Heuristic: deferred if has penalty or leave steps; else awaiting service
            var hasPenalty = unified.Steps.Any(s => s.CalculationKind == "Allowance" && s.StepCode == "DISCIPLINARY");
            var hasLeave = unified.Steps.Any(s => s.CalculationKind == "Allowance" && s.StepCode == "LEAVE");

            if (hasPenalty)
                return AnnualAllowanceStatus.DeferredPenalty;
            if (hasLeave)
                return AnnualAllowanceStatus.DeferredLeave;

            return AnnualAllowanceStatus.AwaitingService;
        }

        return AnnualAllowanceStatus.Eligible;
    }

    private static string BuildAllowanceSummaryFromUnified(PromotionAllowanceCalculationDetailsViewModel unified)
    {
        if (!unified.AllowanceDueDate.HasValue)
            return "العلاوة غير محسوبة.";

        var reasons = unified.Steps
            .Where(x => x.CalculationKind == "Allowance" && x.StepCode != "BASE_RULE")
            .Select(x => x.Reason)
            .Distinct()
            .Take(5)
            .ToList();

        var reasonsText = reasons.Count == 0
            ? "بدون تعديلات إضافية."
            : string.Join(" | ", reasons);

        return $"العلاوة السنوية: {unified.AllowanceDueDate.Value:yyyy-MM-dd}. {reasonsText}";
    }
}