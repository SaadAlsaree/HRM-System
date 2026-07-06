namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAffiliationsReport;

public class GetExpiringAffiliationsReportHandler : IRequestHandler<GetExpiringAffiliationsReportQuery, Response<PagedResult<GetExpiringAffiliationsReportViewModel>>>
{
    private readonly IBaseRepository<Domain.Entities.Affiliation> _repository;

    public GetExpiringAffiliationsReportHandler(IBaseRepository<Domain.Entities.Affiliation> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<PagedResult<GetExpiringAffiliationsReportViewModel>>> Handle(GetExpiringAffiliationsReportQuery request, CancellationToken cancellationToken)
    {
        var thresholdDate = DateOnly.FromDateTime(DateTime.Now.AddDays(request.DaysThreshold));

        var (data, totalCount) = await _repository.GetAsync(
            filter: x => x.StatusId == Status.Active && !x.IsDeleted && x.ToDate != null && x.ToDate <= thresholdDate,
            selector: x => new GetExpiringAffiliationsReportViewModel
            {
                Id = x.Id,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                TypeOfAssignment = x.TypeOfAssignment.Name,
                FromDate = x.FromDate,
                ToDate = x.ToDate,
                DurationMonths = x.DurationMonths,
                RenewalCount = x.RenewalCount,
                OrderNo = x.OrderNo,
                OrderDate = x.OrderDate,
                IssuingAuthority = x.IssuingAuthority,
                Ministry = x.Ministry,
                Status = x.StatusId.ToString()
            },
            include: inc => inc.Include(x => x.Employee).Include(x => x.TypeOfAssignment),
            orderBy: o => o.OrderBy(x => x.ToDate),
            take: request.PageSize,
            skip: request.Page > 0 ? (request.Page - 1) * request.PageSize : 0,
            cancellationToken: cancellationToken);

        var result = new PagedResult<GetExpiringAffiliationsReportViewModel>
        {
            Items = data,
            TotalCount = totalCount
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
