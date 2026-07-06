namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetMovementsHistoryReport;

public class GetMovementsHistoryReportViewModel
{
    public Guid Id { get; set; }
    public string EmployeeName { get; set; }
    public string JobCode { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string FromOrganization { get; set; }
    public string ToOrganization { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string Note { get; set; }
}
