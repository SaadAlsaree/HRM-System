namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.RejectLeave;

public sealed record RejectLeaveCommand : IRequest<Response<bool>>
{
    public Guid LeaveId { get; set; }
    public Guid ApproverId { get; set; }
    public string? Note { get; set; }
}
