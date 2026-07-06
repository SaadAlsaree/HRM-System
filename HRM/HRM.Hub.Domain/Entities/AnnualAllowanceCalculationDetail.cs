using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class AnnualAllowanceCalculationDetail : BaseEntity<Guid>
{
    public Guid RunId { get; set; }
    public Guid EmployeeId { get; set; }
    public AnnualAllowanceStepCode StepCode { get; set; }
    public string SourceEntityName { get; set; } = string.Empty;
    public string SourceEntityId { get; set; } = string.Empty;
    public string Reason { get; set; } = string.Empty;
    public DateOnly? BeforeDate { get; set; }
    public DateOnly? AfterDate { get; set; }
    public int DeltaMonths { get; set; }
    public int DeltaDays { get; set; }

    public virtual AnnualAllowanceCalculationRun Run { get; set; }
    public virtual Employees Employee { get; set; }
}