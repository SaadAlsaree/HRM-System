namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.Reports;

public class LeaveReportItem
{
    public Guid? LeaveId { get; set; }
    public Guid? EmployeeId { get; set; }
    public string? EmployeeName { get; set; }
    public string? JobCode { get; set; }
    public int? TypeOfLeaveId { get; set; }
    public string? TypeOfLeaveName { get; set; }
    public string? DepartmentName { get; set; }
    public string? DirectorateName { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? CountOfDays { get; set; }
    public string? LeaveStatusName { get; set; }
    public int? AnnualBalance { get; set; }
    public int? CarriedOverBalance { get; set; }
    public int? EarnedBalance { get; set; }
    public int? UsedBalance { get; set; }
    public int? RemainingBalance { get; set; }
    public string? GroupKey { get; set; }
    public int GroupCount { get; set; }
    public int TotalDays { get; set; }
}

public class LeaveReportResult
{
    public LeaveReportType ReportType { get; set; }
    public List<LeaveReportItem> Items { get; set; } = new();
    public int TotalCount { get; set; }
    public string? Summary { get; set; }
}
