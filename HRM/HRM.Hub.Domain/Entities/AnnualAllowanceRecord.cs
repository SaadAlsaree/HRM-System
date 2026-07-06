using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class AnnualAllowanceRecord : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateOnly DueDate { get; set; }
    public DateOnly? ImplementationDate { get; set; }
    public int BonusTypeId { get; set; }
    public string? ReasonForAmendment { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateOnly AdministrativeOrderDate { get; set; }
    public AnnualAllowanceStatus AnnualAllowanceStatus { get; set; }
    public Guid UserId { get; set; }
    public DateTime EnteredDate { get; set; }
    public Guid? CalculationRunId { get; set; }

    public virtual Employees Employee { get; set; }
    public virtual AnnualAllowanceCalculationRun CalculationRun { get; set; }
}