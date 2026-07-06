namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CancelLeave;

public sealed record CancelLeaveCommand : IRequest<Response<bool>>
{
    public Guid LeaveId { get; set; }
    public string? Reason { get; set; }
}
