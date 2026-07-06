using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class AnnualAllowanceCalculationRun : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string Trigger { get; set; } = string.Empty;
    public DateOnly LastAllowanceDate { get; set; }
    public int LegalTermMonths { get; set; }
    public int ServiceMonths { get; set; }
    public DateOnly BaseDate { get; set; }
    public DateOnly BaseDueDate { get; set; }
    public DateOnly FinalDueDate { get; set; }
    public string Summary { get; set; } = string.Empty;
    public AnnualAllowanceStatus AnnualAllowanceStatus { get; set; }

    public virtual Employees Employee { get; set; }
    public virtual ICollection<AnnualAllowanceCalculationDetail> Details { get; set; } = new List<AnnualAllowanceCalculationDetail>();
    public virtual ICollection<AnnualAllowanceRecord> AnnualAllowanceRecords { get; set; } = new List<AnnualAllowanceRecord>();
}