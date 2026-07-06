using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeave;

public class UpdateLeaveCommandHandler : IRequestHandler<UpdateLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public UpdateLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public async Task<Response<bool>> Handle(UpdateLeaveCommand request, CancellationToken cancellationToken)
    {
        var updateRequest = new LeaveUpdateRequest
        {
            NormalLeaveTypeId = request.NormalLeaveTypeId,
            TypeOfLeaveId = request.TypeOfLeaveId,
            SicknessTypeId = request.SicknessTypeId,
            LongLeaveTypeId = request.LongLeaveTypeId,
            OrderNo = request.OrderNo,
            OrderDate = request.OrderDate,
            FromDate = request.FromDate,
            ToDate = request.ToDate,
            CountOfDays = request.CountOfDays,
            CountOfMinutes = request.CountOfMinutes,
            SalaryStatusId = request.SalaryStatusId,
            IsInside = request.IsInside,
            Reason = request.Note,
            Note = request.Note,
            CountryId = null
        };

        return await _leaveManagementService.UpdateAsync(request.LeaveId, updateRequest, cancellationToken);
    }
}
