namespace HRM.Hub.Application.Features.TeamNotification.Commands.CreateTeamNotification;
public class CreateTeamNotificationCommand : IRequest<Response<bool>>
{
    public Guid TeamId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Body { get; set; }
    public string Note { get; set; }
    public Status Status { get; set; }
    public Guid? CreateBy { get; set; }
}
