using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;
public class TeamNotifications : BaseEntity<Guid>
{
    public Guid TeamId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Body { get; set; }
    public string Note { get; set; }
    public bool IsRead { get; set; }
    public DateTime? NotificationDate { get; set; }
    public NotificationType Type { get; set; }
    
    public virtual Employees Employee { get; set; }
}
