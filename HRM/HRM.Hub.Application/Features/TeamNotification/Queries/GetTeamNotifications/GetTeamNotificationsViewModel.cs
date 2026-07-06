using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.TeamNotification.Queries.GetTeamNotifications;

public class GetTeamNotificationsViewModel
{
    public Guid Id { get; set; }
    public Guid TeamId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Body { get; set; }
    public string Note { get; set; }
    public bool IsRead { get; set; }
    public DateTime? NotificationDate { get; set; }
    public NotificationType Type { get; set; }
    public DateTime CreatedAt { get; set; }
}
