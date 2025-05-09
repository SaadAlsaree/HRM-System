using HRM.Hub.Application.Helper;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeave;
public sealed record UpdateLeaveCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid LeaveId { get; set; }

    public Guid EmployeeId { get; set; }
    public int? NormalLeaveTypeId { get; set; }
    public int? TypeOfLeaveId { get; set; }
    public int? SicknessTypeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? LongLeaveTypeId { get; set; }
    public int? CountOfDays { get; set; }
    public int? CountOfMinutes { get; set; }
    public SalaryStatus SalaryStatusId { get; set; }
    public bool? IsInside { get; set; }
    public string Country { get; set; }
    public string Note { get; set; }
    public DateTime? ReleaseDate { get; set; }
    public Guid? LastUpdateBy { get; set; }
    
    public DateTime? DateOfAssignment { get; set; }
    public string NoOfAssignment { get; set; }

    public DateTime? DateOfBirthCertificate { get; set; }
    public string NoOfBirthCertificate { get; set; }
    
    public DateTime? DateOfRelease { get; set; }
    public string NoOfRelease { get; set; }
    
    public DateTime? DateOfStart { get; set; }
    public string NoOfStart { get; set; }
    
    public DateTime? DateOfPermission { get; set; }
    public string NoOfPermission { get; set; }
}