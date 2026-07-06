using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CreateLeave;

public class CreateLeaveCommandHandler : IRequestHandler<CreateLeaveCommand, Response<bool>>
{
    private readonly ILeaveManagementService _leaveManagementService;

    public CreateLeaveCommandHandler(ILeaveManagementService leaveManagementService)
    {
        _leaveManagementService = leaveManagementService ?? throw new ArgumentNullException(nameof(leaveManagementService));
    }

    public async Task<Response<bool>> Handle(CreateLeaveCommand request, CancellationToken cancellationToken)
    {
        var createRequest = new LeaveCreateRequest
        {
            EmployeeId = request.EmployeeId,
            TypeOfLeaveId = request.TypeOfLeaveId,
            NormalLeaveTypeId = request.NormalLeaveTypeId,
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
            CountryId = request.CountryId,
            DateOfAssignment = request.DateOfAssignment,
            NoOfAssignment = request.NoOfAssignment,
            HireDate = request.HireDate,
            HireOrderNo = request.HireOrderNo,
            HireOrderDate = request.HireOrderDate,
            ReleaseDate = request.ReleaseDate,
            DateOfBirthCertificate = request.DateOfBirthCertificate,
            NoOfBirthCertificate = request.NoOfBirthCertificate,
            DateOfRelease = request.DateOfRelease,
            NoOfRelease = request.NoOfRelease,
            DateOfStart = request.DateOfStart,
            NoOfStart = request.NoOfStart,
            DateOfPermission = request.DateOfPermission,
            NoOfPermission = request.NoOfPermission,
            InitialStatus = LeaveStatus.Active
        };

        return await _leaveManagementService.CreateAsync(createRequest, cancellationToken);
    }
}
