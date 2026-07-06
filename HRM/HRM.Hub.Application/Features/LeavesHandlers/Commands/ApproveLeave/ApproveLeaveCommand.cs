namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.ApproveLeave;

public sealed record ApproveLeaveCommand : IRequest<Response<bool>>
{
    public Guid LeaveId { get; set; }
    public Guid ApproverId { get; set; }
    public string? Note { get; set; }
}
