using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.Reports;

public sealed record GetLeaveReportQuery : IRequest<Response<LeaveReportResult>>
{
    public LeaveReportType ReportType { get; set; }
    public DateOnly? DateFrom { get; set; }
    public DateOnly? DateTo { get; set; }
    public int? TypeOfLeaveId { get; set; }
    public int? DepartmentId { get; set; }
    public int? DirectorateId { get; set; }
    public Guid? EmployeeId { get; set; }
}
