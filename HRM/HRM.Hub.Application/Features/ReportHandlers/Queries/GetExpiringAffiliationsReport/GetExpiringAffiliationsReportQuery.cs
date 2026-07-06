namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAffiliationsReport;

public class GetExpiringAffiliationsReportQuery : IRequest<Response<PagedResult<GetExpiringAffiliationsReportViewModel>>>
{
    public int DaysThreshold { get; set; } = 30;
    public int Page { get; set; }
    public byte PageSize { get; set; } = 10;
}
