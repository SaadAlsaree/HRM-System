namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CancelLeave;

public class CancelLeaveCommandHandler : IRequestHandler<CancelLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public CancelLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public Task<Response<bool>> Handle(CancelLeaveCommand request, CancellationToken cancellationToken)
        => _leaveManagementService.CancelAsync(request.LeaveId, null, request.Reason, cancellationToken);
}
