using HRM.Hub.Application.Features.PromotionAllowanceCalculation.Models;

namespace HRM.Hub.Application.Contracts;

public interface IPromotionAllowanceCalculationService
{
    Task<PromotionAllowanceCalculationDetailsViewModel?> CalculateAsync(Guid employeeId, string trigger, CancellationToken ct);
    Task<IReadOnlyList<PromotionAllowanceCalculationDetailsViewModel>> CalculateBatchAsync(IEnumerable<Guid> employeeIds, string trigger, CancellationToken ct);
    Task<PromotionAllowanceCalculationDetailsViewModel?> GetLatestDetailsAsync(Guid employeeId, CancellationToken ct);
}
