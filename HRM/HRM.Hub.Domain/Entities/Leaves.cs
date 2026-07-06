using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class Leaves : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int? NormalLeaveTypeId { get; set; }
    public int TypeOfLeaveId { get; set; }
    public LeaveTypes LegacyTypeOfLeaveId { get; set; }
    public int? SicknessTypeId { get; set; }
    public int? LongLeaveTypeId { get; set; }

    public LeaveStatus LeaveStatusId { get; set; } = LeaveStatus.Draft;

    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }

    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? CountOfDays { get; set; }
    public int? CountOfMinutes { get; set; }
    public SalaryStatus SalaryStatusId { get; set; }
    public bool? IsInside { get; set; }
    public string Reason { get; set; }
    public string Note { get; set; }
    public int? CountryId { get; set; }

    public DateTime? DateOfAssignment { get; set; }
    public string NoOfAssignment { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public DateTime? DateOfBirthCertificate { get; set; }
    public string NoOfBirthCertificate { get; set; }

    public DateTime? DateOfRelease { get; set; }
    public DateTime? ReleaseDate { get; set; }
    public string NoOfRelease { get; set; }
    public DateTime? DateOfStart { get; set; }
    public string NoOfStart { get; set; }

    public DateTime? DateOfPermission { get; set; }
    public string NoOfPermission { get; set; }
    public string CutReason { get; set; }
    public bool? AffectsPromotion { get; set; }
    public bool? AffectsAllowance { get; set; }
    public int? DelayDaysOverride { get; set; }
    public bool DelayWholeDuration { get; set; } = true;

    public Guid? ApproverId { get; set; }
    public string ApprovalNote { get; set; }

    public DateTime? SubmittedAt { get; set; }
    public DateTime? ApprovedAt { get; set; }
    public DateTime? RejectedAt { get; set; }
    public DateTime? ActivatedAt { get; set; }
    public DateTime? ExpiredAt { get; set; }
    public DateTime? CancelledAt { get; set; }

    public virtual Country Country { get; set; }
    public virtual Employees Employee { get; set; }
    public TypeOfLeave TypeOfLeave { get; set; }
    public LongLeaveType LongLeaveType { get; set; }
    public virtual NormalLeaveType NormalLeaveType { get; set; }
    public virtual SicknessType SicknessType { get; set; }

    public virtual ICollection<LeaveTransitionLog> LeaveTransitionLogs { get; set; } = new List<LeaveTransitionLog>();
    public virtual ICollection<LeaveExtension> LeaveExtensions { get; set; } = new List<LeaveExtension>();
    public virtual ICollection<LeaveApproval> LeaveApprovals { get; set; } = new List<LeaveApproval>();
}
