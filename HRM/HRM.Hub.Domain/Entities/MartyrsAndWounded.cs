using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class MartyrsAndWounded : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateOnly? DateOfDeath { get; set; }
    public DateTime? EndDateOfService { get; set; }
    public DateTime? RetirementDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime AdministrativeOrderDate { get; set; }
    public bool IsPoliticallyDismissed { get; set; }
    public Status? Status { get; set; }
    public string Note { get; set; }

    public DateTime? DateOfMartyrdom { get; set; }
    public HealthStatus HealthStatus { get; set; }
    public virtual Employees Employee { get; set; }
}