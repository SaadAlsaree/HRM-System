using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;

namespace HRM.Hub.Application.Contracts;

public interface ILeaveManagementService
{
    Task<Response<bool>> CreateAsync(LeaveCreateRequest request, CancellationToken ct);
    Task<Response<bool>> UpdateAsync(Guid leaveId, LeaveUpdateRequest request, CancellationToken ct);
    Task<Response<bool>> SubmitAsync(Guid leaveId, Guid? userId, CancellationToken ct);
    Task<Response<bool>> ApproveAsync(Guid leaveId, Guid approverId, string? note, CancellationToken ct);
    Task<Response<bool>> RejectAsync(Guid leaveId, Guid approverId, string? note, CancellationToken ct);
    Task<Response<bool>> CancelAsync(Guid leaveId, Guid? userId, string? reason, CancellationToken ct);
    Task<Response<bool>> CutAsync(Guid leaveId, int daysToCut, string? reason, bool adjustBalance, Guid? userId, CancellationToken ct);
    Task<Response<bool>> ExtendAsync(Guid leaveId, LeaveExtensionRequest request, Guid? userId, CancellationToken ct);
    Task<Response<bool>> ReturnAsync(Guid leaveId, LeaveReturnRequest request, Guid? userId, CancellationToken ct);
}

public record LeaveCreateRequest
{
    public Guid EmployeeId { get; set; }
    public int TypeOfLeaveId { get; set; }
    public int? NormalLeaveTypeId { get; set; }
    public int? SicknessTypeId { get; set; }
    public int? LongLeaveTypeId { get; set; }
    public string? OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? CountOfDays { get; set; }
    public int? CountOfMinutes { get; set; }
    public SalaryStatus SalaryStatusId { get; set; }
    public bool? IsInside { get; set; }
    public string? Reason { get; set; }
    public string? Note { get; set; }
    public int? CountryId { get; set; }
    public DateTime? DateOfAssignment { get; set; }
    public string? NoOfAssignment { get; set; }
    public DateOnly? HireDate { get; set; }
    public string? HireOrderNo { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateTime? ReleaseDate { get; set; }
    public DateTime? DateOfBirthCertificate { get; set; }
    public string? NoOfBirthCertificate { get; set; }
    public DateTime? DateOfRelease { get; set; }
    public string? NoOfRelease { get; set; }
    public DateTime? DateOfStart { get; set; }
    public string? NoOfStart { get; set; }
    public DateTime? DateOfPermission { get; set; }
    public string? NoOfPermission { get; set; }
    public LeaveStatus InitialStatus { get; set; } = LeaveStatus.Draft;
}

public record LeaveUpdateRequest
{
    public int? NormalLeaveTypeId { get; set; }
    public int? TypeOfLeaveId { get; set; }
    public int? SicknessTypeId { get; set; }
    public int? LongLeaveTypeId { get; set; }
    public string? OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? CountOfDays { get; set; }
    public int? CountOfMinutes { get; set; }
    public SalaryStatus? SalaryStatusId { get; set; }
    public bool? IsInside { get; set; }
    public string? Reason { get; set; }
    public string? Note { get; set; }
    public int? CountryId { get; set; }
}

public record LeaveExtensionRequest
{
    public int ExtensionDays { get; set; }
    public DateOnly NewEndDate { get; set; }
    public string? OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string? Reason { get; set; }
}

public record LeaveReturnRequest
{
    public DateOnly ReturnDate { get; set; }
    public string? OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string? Remarks { get; set; }
}
