namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAffiliationsReport;

public class GetExpiringAffiliationsReportViewModel
{
    public Guid Id { get; set; }
    public string EmployeeName { get; set; }
    public string JobCode { get; set; }
    public string TypeOfAssignment { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? DurationMonths { get; set; }
    public int? RenewalCount { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string IssuingAuthority { get; set; }
    public string Ministry { get; set; }
    public string Status { get; set; }
}
