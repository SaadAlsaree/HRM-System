namespace HRM.Hub.Domain.Entities;

public class LogPromotionWithholding:BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateOnly? ScheduledPromotionDate { get; set; }
    public DateOnly? WithholdingDate { get; set; }
    public string ReasonForWithholding { get; set; }
    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }
}
