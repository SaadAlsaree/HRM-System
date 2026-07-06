namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.SubmitLeave;

public class SubmitLeaveCommandHandler : IRequestHandler<SubmitLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public SubmitLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public Task<Response<bool>> Handle(SubmitLeaveCommand request, CancellationToken cancellationToken)
        => _leaveManagementService.SubmitAsync(request.LeaveId, null, cancellationToken);
}
