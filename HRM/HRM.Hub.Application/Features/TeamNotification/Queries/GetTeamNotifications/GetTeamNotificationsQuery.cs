namespace HRM.Hub.Application.Features.TeamNotification.Queries.GetTeamNotifications;

public class GetTeamNotificationsQuery : IRequest<Response<PagedResult<GetTeamNotificationsViewModel>>>
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public bool? IsRead { get; set; }
}
