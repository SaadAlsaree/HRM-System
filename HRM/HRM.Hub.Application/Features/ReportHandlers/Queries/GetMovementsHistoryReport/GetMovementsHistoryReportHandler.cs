namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetMovementsHistoryReport;

public class GetMovementsHistoryReportHandler : IRequestHandler<GetMovementsHistoryReportQuery, Response<PagedResult<GetMovementsHistoryReportViewModel>>>
{
    private readonly IBaseRepository<Movements> _repository;

    public GetMovementsHistoryReportHandler(IBaseRepository<Movements> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<PagedResult<GetMovementsHistoryReportViewModel>>> Handle(GetMovementsHistoryReportQuery request, CancellationToken cancellationToken)
    {
        Expression<Func<Movements, bool>> filter = x => !x.IsDeleted
            && (!request.EmployeeId.HasValue || x.EmployeeId == request.EmployeeId.Value)
            && (!request.FromDate.HasValue || x.OrderDate >= request.FromDate)
            && (!request.ToDate.HasValue || x.OrderDate <= request.ToDate);

        var (data, totalCount) = await _repository.GetAsync(
            filter: filter,
            selector: x => new GetMovementsHistoryReportViewModel
            {
                Id = x.Id,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                OrderNo = x.OrderNo,
                OrderDate = x.OrderDate,
                FromOrganization = x.FromDepartment != null ? x.FromDepartment.Name : null,
                ToOrganization = x.ToDepartment != null ? x.ToDepartment.Name : null,
                ReleaseDate = x.ReleaseDate,
                HireDate = x.HireDate,
                Note = x.Note
            },
            include: inc => inc.Include(x => x.Employee).Include(x => x.FromDepartment).Include(x => x.ToDepartment),
            orderBy: o => o.OrderByDescending(x => x.OrderDate),
            take: request.PageSize,
            skip: request.Page > 0 ? (request.Page - 1) * request.PageSize : 0,
            cancellationToken: cancellationToken);

        var result = new PagedResult<GetMovementsHistoryReportViewModel>
        {
            Items = data,
            TotalCount = totalCount
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
