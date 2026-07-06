namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.ExtendLeave;

public class ExtendLeaveCommandHandler : IRequestHandler<ExtendLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public ExtendLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public Task<Response<bool>> Handle(ExtendLeaveCommand request, CancellationToken cancellationToken)
    {
        var extensionRequest = new LeaveExtensionRequest
        {
            ExtensionDays = request.ExtensionDays,
            NewEndDate = request.NewEndDate,
            OrderNo = request.OrderNo,
            OrderDate = request.OrderDate,
            Reason = request.Reason
        };

        return _leaveManagementService.ExtendAsync(request.LeaveId, extensionRequest, null, cancellationToken);
    }
}
