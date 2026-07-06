namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAssignmentsReport;

public class GetExpiringAssignmentsReportHandler : IRequestHandler<GetExpiringAssignmentsReportQuery, Response<PagedResult<GetExpiringAssignmentsReportViewModel>>>
{
    private readonly IBaseRepository<Domain.Entities.Assignments> _repository;

    public GetExpiringAssignmentsReportHandler(IBaseRepository<Domain.Entities.Assignments> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<PagedResult<GetExpiringAssignmentsReportViewModel>>> Handle(GetExpiringAssignmentsReportQuery request, CancellationToken cancellationToken)
    {
        var thresholdDate = DateOnly.FromDateTime(DateTime.Now.AddDays(request.DaysThreshold));

        var (data, totalCount) = await _repository.GetAsync(
            filter: x => x.StatusId == Status.Active && !x.IsDeleted && x.DurationOfAssignment != null && x.OrderDate != null,
            selector: x => new GetExpiringAssignmentsReportViewModel
            {
                Id = x.Id,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                TypeOfAssignment = x.TypeOfAssignment.Name,
                AssignedFromOrganization = x.AssignedFromOrganization,
                AssignedToOrganization = x.AssignedToOrganization,
                OrderDate = x.OrderDate,
                DurationOfAssignment = x.DurationOfAssignment,
                ComputedEndDate = x.OrderDate!.Value.AddMonths(x.DurationOfAssignment!.Value),
                ExtensionDate = x.ExtensionDate,
                Status = x.StatusId.ToString()
            },
            include: inc => inc.Include(x => x.Employee).Include(x => x.TypeOfAssignment),
            orderBy: o => o.OrderBy(x => x.OrderDate),
            take: request.PageSize,
            skip: request.Page > 0 ? (request.Page - 1) * request.PageSize : 0,
            cancellationToken: cancellationToken);

        // Filter in-memory for those expiring within threshold
        var filtered = data.Where(x => x.ComputedEndDate != null && x.ComputedEndDate <= thresholdDate).ToList();

        var result = new PagedResult<GetExpiringAssignmentsReportViewModel>
        {
            Items = filtered,
            TotalCount = filtered.Count
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
