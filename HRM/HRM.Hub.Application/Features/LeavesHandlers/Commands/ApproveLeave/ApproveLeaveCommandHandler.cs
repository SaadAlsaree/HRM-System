namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.ApproveLeave;

public class ApproveLeaveCommandHandler : IRequestHandler<ApproveLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public ApproveLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public Task<Response<bool>> Handle(ApproveLeaveCommand request, CancellationToken cancellationToken)
        => _leaveManagementService.ApproveAsync(request.LeaveId, request.ApproverId, request.Note, cancellationToken);
}
