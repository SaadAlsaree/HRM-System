namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAssignmentsReport;

public class GetExpiringAssignmentsReportQuery : IRequest<Response<PagedResult<GetExpiringAssignmentsReportViewModel>>>
{
    public int DaysThreshold { get; set; } = 30;
    public int Page { get; set; }
    public byte PageSize { get; set; } = 10;
}
