namespace HRM.Hub.Domain.Entities;

public class Interruption: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateTime? NotificationDate { get; set; }
    public string Reason { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }

}