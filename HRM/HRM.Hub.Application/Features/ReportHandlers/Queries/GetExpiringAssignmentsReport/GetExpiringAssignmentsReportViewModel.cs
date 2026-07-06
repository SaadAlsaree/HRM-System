namespace HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAssignmentsReport;

public class GetExpiringAssignmentsReportViewModel
{
    public Guid Id { get; set; }
    public string EmployeeName { get; set; }
    public string JobCode { get; set; }
    public string TypeOfAssignment { get; set; }
    public string AssignedFromOrganization { get; set; }
    public string AssignedToOrganization { get; set; }
    public DateOnly? OrderDate { get; set; }
    public int? DurationOfAssignment { get; set; }
    public DateOnly? ComputedEndDate { get; set; }
    public DateOnly? ExtensionDate { get; set; }
    public string Status { get; set; }
}
