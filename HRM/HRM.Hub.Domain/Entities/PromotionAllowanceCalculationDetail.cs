using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class PromotionAllowanceCalculationDetail : BaseEntity<Guid>
{
    public Guid RunId { get; set; }
    public Guid EmployeeId { get; set; }
    public PromotionAllowanceCalculationKind CalculationKind { get; set; }
    public string StepCode { get; set; } = string.Empty;
    public string SourceEntityName { get; set; } = string.Empty;
    public string SourceEntityId { get; set; } = string.Empty;
    public string Reason { get; set; } = string.Empty;
    public DateOnly? BeforeDate { get; set; }
    public DateOnly? AfterDate { get; set; }
    public int DeltaMonths { get; set; }
    public int DeltaDays { get; set; }

    public virtual PromotionAllowanceCalculationRun Run { get; set; }
    public virtual Employees Employee { get; set; }
}
