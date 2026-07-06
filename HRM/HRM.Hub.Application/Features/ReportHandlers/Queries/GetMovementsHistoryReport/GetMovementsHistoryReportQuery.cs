namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetMovementsHistoryReport;

public class GetMovementsHistoryReportQuery : IRequest<Response<PagedResult<GetMovementsHistoryReportViewModel>>>
{
    public Guid? EmployeeId { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; } = 10;
}
