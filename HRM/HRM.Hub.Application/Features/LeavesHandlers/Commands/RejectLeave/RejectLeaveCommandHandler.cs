namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.RejectLeave;

public class RejectLeaveCommandHandler : IRequestHandler<RejectLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public RejectLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public Task<Response<bool>> Handle(RejectLeaveCommand request, CancellationToken cancellationToken)
        => _leaveManagementService.RejectAsync(request.LeaveId, request.ApproverId, request.Note, cancellationToken);
}
