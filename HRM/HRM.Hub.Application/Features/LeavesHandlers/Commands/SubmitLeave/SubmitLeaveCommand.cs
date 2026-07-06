namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.SubmitLeave;

public sealed record SubmitLeaveCommand : IRequest<Response<bool>>
{
    public Guid LeaveId { get; set; }
}
