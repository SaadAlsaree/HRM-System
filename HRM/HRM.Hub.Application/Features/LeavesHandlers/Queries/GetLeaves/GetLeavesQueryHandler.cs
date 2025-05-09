namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.GetLeaves;
public class GetLeavesQueryHandler : GetAllWithCountHandler<Leaves, GetLeavesViewModel, GetLeavesQuery>,
    IRequestHandler<GetLeavesQuery, Response<PagedResult<GetLeavesViewModel>>>
{
    public GetLeavesQueryHandler(IBaseRepository<Leaves> leavesBalanceRepository)
        : base(leavesBalanceRepository)
    {
    }

    public override Expression<Func<Leaves, GetLeavesViewModel>> Selector =>
        x => new GetLeavesViewModel
        {
            Id = x.Id,
            EmployeeId = x.EmployeeId,
            StatisticalIndex = x.Employee.StatisticalIndex,
            FullName = x.Employee.FullName,
            JobCode = x.Employee.JobCode,
            OrderNo = x.OrderNo,
            CountOfMinutes = x.CountOfMinutes,
            OrderDate = x.OrderDate,
            CountOfDays = x.CountOfDays,
            FromDate = x.FromDate,
            ToDate = x.ToDate,
            CountryId = x.CountryId,
            CountryName = x.Country.Name,
            Note = x.Note,
            Status = x.StatusId,
            DateOfAssignment = x.DateOfAssignment,
            NoOfAssignment = x.NoOfAssignment,
            DateOfBirthCertificate = x.DateOfBirthCertificate,
            NoOfBirthCertificate = x.NoOfBirthCertificate,
            IsInside = x.IsInside,
            SalaryStatusId = x.SalaryStatusId,
            SalaryStatusName = x.SalaryStatusId.GetDisplayName(),
            DateOfRelease = x.DateOfRelease,
            NoOfRelease = x.NoOfRelease,
            HireOrderNo = x.HireOrderNo,
            HireOrderDate = x.HireOrderDate,
            HireDate = x.HireDate,
            DateOfStart = x.DateOfStart,
            NoOfStart = x.NoOfStart,
            ReleaseDate = x.ReleaseDate,
            DateOfPermission = x.DateOfPermission,
            NoOfPermission = x.NoOfPermission,
            NormalLeaveTypeName = x.NormalLeaveType.Name,
            SicknessTypeName = x.SicknessType.Name,
            NormalLeaveTypeId = x.NormalLeaveTypeId,
            SicknessTypeId = x.SicknessTypeId,
            LotNumber = x.Employee.LotNumber,
        };

    public override Func<IQueryable<Leaves>, IOrderedQueryable<Leaves>> OrderBy =>
        o => o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetLeavesViewModel>>> Handle(GetLeavesQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}