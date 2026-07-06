using HRM.Hub.Application.Features.AnnualAllowanceCalculation.Models;

namespace HRM.Hub.Application.Contracts;

public interface IAnnualAllowanceCalculationService
{
    Task<AnnualAllowanceCalculationViewModel?> CalculateAsync(Guid employeeId, string trigger, CancellationToken ct);
    Task<IReadOnlyList<AnnualAllowanceCalculationViewModel>> CalculateBatchAsync(IEnumerable<Guid> employeeIds, string trigger, CancellationToken ct);
    Task<AnnualAllowanceCalculationViewModel?> RecalculateOnChangeAsync(Guid employeeId, string trigger, CancellationToken ct);
    Task<AnnualAllowanceCalculationViewModel?> GetLatestDetailsAsync(Guid employeeId, CancellationToken ct);
    Task<bool> VerifyDataAsync(Guid employeeId, CancellationToken ct);
    Task ThrowIfDuplicateAsync(Guid employeeId, DateOnly allowanceDate, CancellationToken ct);
}