namespace HRM.Hub.Application.Features.TeamNotification.Queries.GetUnreadCount;

public class GetUnreadCountQuery : IRequest<Response<int>>
{
    public Guid EmployeeId { get; set; }
}
