namespace HRM.Hub.Application.Features.TeamNotification.Commands.MarkAsRead;

public class MarkAsReadCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
