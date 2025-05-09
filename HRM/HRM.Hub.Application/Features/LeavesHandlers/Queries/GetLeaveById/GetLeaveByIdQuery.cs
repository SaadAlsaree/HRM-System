namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.GetLeaveById;

public class GetLeaveByIdQuery : IRequest<Response<GetLeaveByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}