namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CutLeave;

public class CutLeaveCommandHandler : IRequestHandler<CutLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public CutLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public async Task<Response<bool>> Handle(CutLeaveCommand request, CancellationToken cancellationToken)
    {
        var validator = new CutLeaveValidator();
        var validationResult = await validator.ValidateAsync(request, cancellationToken);
        if (validationResult.Errors.Count > 0)
            throw new Exceptions.ValidationException(validationResult);

        return await _leaveManagementService.CutAsync(
            request.LeaveId,
            request.DaysToCut ?? 0,
            request.CutReason,
            request.AdjustBalance,
            null,
            cancellationToken);
    }
}
