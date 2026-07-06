namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeaveHire;

public class UpdateLeaveHireCommandHandler : IRequestHandler<UpdateLeaveHireCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public UpdateLeaveHireCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public async Task<Response<bool>> Handle(UpdateLeaveHireCommand request, CancellationToken cancellationToken)
    {
        var returnRequest = new LeaveReturnRequest
        {
            ReturnDate = request.HireDate ?? DateOnly.FromDateTime(DateTime.Now),
            OrderNo = request.HireOrderNo,
            OrderDate = request.HireOrderDate,
            Remarks = "return-to-work"
        };

        return await _leaveManagementService.ReturnAsync(request.LeaveId, returnRequest, null, cancellationToken);
    }
}
