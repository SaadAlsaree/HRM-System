namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.GetLeaveById;

public class GetLeaveByIdHandler : IRequestHandler<GetLeaveByIdQuery,
    Response<GetLeaveByIdViewModel>>
{
    private readonly IBaseRepository<Leaves> _repositoryLeave;

    public GetLeaveByIdHandler(IBaseRepository<Leaves> repositoryLeave)
    {
        _repositoryLeave = repositoryLeave ??
                                         throw new ArgumentNullException(nameof(repositoryLeave));
    }

    public async Task<Response<GetLeaveByIdViewModel>> Handle(GetLeaveByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryLeave
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetLeaveByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = a.EmployeeId,
                StatisticalIndex = a.Employee.StatisticalIndex,
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                OrderNo = a.OrderNo,
                CountOfMinutes = a.CountOfMinutes,
                OrderDate = a.OrderDate,
                CountOfDays = a.CountOfDays,
                FromDate = a.FromDate,
                ToDate = a.ToDate,
                ReleaseDate = a.ReleaseDate,
                CountryId = a.CountryId,
                CountryName = a.Country.Name,
                Note = a.Note,
                DateOfAssignment = a.DateOfAssignment,
                NoOfAssignment = a.NoOfAssignment,
                DateOfBirthCertificate = a.DateOfBirthCertificate,
                NoOfBirthCertificate = a.NoOfBirthCertificate,
                IsInside = a.IsInside,
                SalaryStatusId = a.SalaryStatusId,
                SalaryStatusName = a.SalaryStatusId.GetDisplayName(),
                DateOfRelease = a.DateOfRelease,
                NoOfRelease = a.NoOfRelease,
                HireDate = a.HireDate,
                HireOrderDate = a.HireOrderDate,
                HireOrderNo = a.HireOrderNo,
                DateOfStart = a.DateOfStart,
                NoOfStart = a.NoOfStart,
                DateOfPermission = a.DateOfPermission,
                NoOfPermission = a.NoOfPermission,
                NormalLeaveTypeName = a.NormalLeaveType.Name,
                SicknessTypeName = a.SicknessType.Name,
                NormalLeaveTypeId = a.NormalLeaveTypeId,
                SicknessTypeId = a.SicknessTypeId,
                Status = a.StatusId,

                LotNumber = a.Employee.LotNumber,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}