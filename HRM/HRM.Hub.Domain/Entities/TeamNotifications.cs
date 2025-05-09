namespace HRM.Hub.Domain.Entities;
public class TeamNotifications:BaseEntity<Guid>
{
    public Guid TeamId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Body { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }
}
