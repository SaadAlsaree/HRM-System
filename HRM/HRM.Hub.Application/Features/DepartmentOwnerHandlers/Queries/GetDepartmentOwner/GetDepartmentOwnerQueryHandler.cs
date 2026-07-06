namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwner;

public class GetDepartmentOwnerQueryHandler : IRequestHandler<GetDepartmentOwnerQuery, Response<PagedResult<GetDepartmentOwnerViewModel>>>
{
    private readonly IBaseRepository<DepartmentOwner> _repository;

    public GetDepartmentOwnerQueryHandler(IBaseRepository<DepartmentOwner> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<PagedResult<GetDepartmentOwnerViewModel>>> Handle(GetDepartmentOwnerQuery request, CancellationToken cancellationToken)
    {
        var (data, totalCount) = await _repository.GetAsync(
            filter: x => !x.IsDeleted
                && (!request.DepartmentId.HasValue || x.DepartmentId == request.DepartmentId.Value)
                && (!request.EmployeeId.HasValue || x.EmployeeId == request.EmployeeId.Value)
                && (!request.IsActive.HasValue || x.IsActive == request.IsActive.Value),
            selector: x => new GetDepartmentOwnerViewModel
            {
                Id = x.Id,
                DepartmentId = x.DepartmentId,
                DepartmentName = x.Department.Name,
                EmployeeId = x.EmployeeId,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                FromDate = x.FromDate,
                ToDate = x.ToDate,
                IsActive = x.IsActive
            },
            include: inc => inc.Include(x => x.Department).Include(x => x.Employee),
            orderBy: o => o.OrderByDescending(x => x.IsActive).ThenBy(x => x.Department.Name),
            take: request.PageSize,
            skip: request.Page > 0 ? (request.Page - 1) * request.PageSize : 0,
            cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetDepartmentOwnerViewModel>
        {
            Items = data,
            TotalCount = totalCount
        });
    }
}
