using HRM.Hub.Domain.Common.Enums;
using Microsoft.Extensions.Logging;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveManagementService : ILeaveManagementService
{
    private readonly IBaseRepository<Leaves> _leavesRepository;
    private readonly IBaseRepository<TypeOfLeave> _typeOfLeaveRepository;
    private readonly IBaseRepository<LeaveApproval> _leaveApprovalRepository;
    private readonly IBaseRepository<LeaveExtension> _leaveExtensionRepository;
    private readonly IBaseRepository<TeamNotifications> _notificationRepository;
    private readonly ILeaveVerificationService _verification;
    private readonly ILeaveBalanceService _balance;
    private readonly ILeaveLifecycleService _lifecycle;
    private readonly ILeaveImpactOrchestrator _impact;
    private readonly ILeaveAuditService _audit;
    private readonly ILogger<LeaveManagementService> _logger;

    public LeaveManagementService(
        IBaseRepository<Leaves> leavesRepository,
        IBaseRepository<TypeOfLeave> typeOfLeaveRepository,
        IBaseRepository<LeaveApproval> leaveApprovalRepository,
        IBaseRepository<LeaveExtension> leaveExtensionRepository,
        IBaseRepository<TeamNotifications> notificationRepository,
        ILeaveVerificationService verification,
        ILeaveBalanceService balance,
        ILeaveLifecycleService lifecycle,
        ILeaveImpactOrchestrator impact,
        ILeaveAuditService audit,
        ILogger<LeaveManagementService> logger)
    {
        _leavesRepository = leavesRepository;
        _typeOfLeaveRepository = typeOfLeaveRepository;
        _leaveApprovalRepository = leaveApprovalRepository;
        _leaveExtensionRepository = leaveExtensionRepository;
        _notificationRepository = notificationRepository;
        _verification = verification;
        _balance = balance;
        _lifecycle = lifecycle;
        _impact = impact;
        _audit = audit;
        _logger = logger;
    }

    public async Task<Response<bool>> CreateAsync(LeaveCreateRequest request, CancellationToken ct)
    {
        var errors = await _verification.ValidateCreateAsync(request, ct);
        if (errors.Count > 0)
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = string.Join("; ", errors) });

        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == request.TypeOfLeaveId, cancellationToken: ct);

        var leave = new Leaves
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            TypeOfLeaveId = request.TypeOfLeaveId,
            LegacyTypeOfLeaveId = (LeaveTypes)request.TypeOfLeaveId,
            NormalLeaveTypeId = request.NormalLeaveTypeId,
            SicknessTypeId = request.SicknessTypeId,
            LongLeaveTypeId = request.LongLeaveTypeId,
            OrderNo = request.OrderNo,
            OrderDate = request.OrderDate,
            FromDate = request.FromDate,
            ToDate = request.ToDate,
            CountOfDays = request.CountOfDays,
            CountOfMinutes = request.CountOfMinutes,
            SalaryStatusId = request.SalaryStatusId != SalaryStatus.NotSpecified
                ? request.SalaryStatusId
                : typeOfLeave?.DefaultSalaryStatusId ?? SalaryStatus.NotSpecified,
            IsInside = request.IsInside,
            Reason = request.Reason,
            Note = request.Note,
            CountryId = request.CountryId,
            DateOfAssignment = request.DateOfAssignment,
            NoOfAssignment = request.NoOfAssignment,
            HireDate = request.HireDate,
            HireOrderNo = request.HireOrderNo,
            HireOrderDate = request.HireOrderDate,
            ReleaseDate = request.ReleaseDate,
            DateOfBirthCertificate = request.DateOfBirthCertificate,
            NoOfBirthCertificate = request.NoOfBirthCertificate,
            DateOfRelease = request.DateOfRelease,
            NoOfRelease = request.NoOfRelease,
            DateOfStart = request.DateOfStart,
            NoOfStart = request.NoOfStart,
            DateOfPermission = request.DateOfPermission,
            NoOfPermission = request.NoOfPermission,
            LeaveStatusId = request.InitialStatus
        };

        await _leavesRepository.Create(leave, ct);

        if (request.InitialStatus == LeaveStatus.Active && request.CountOfDays.HasValue)
        {
            await _balance.CommitAsync(request.EmployeeId, request.CountOfDays.Value, request.TypeOfLeaveId, request.Reason ?? "create", ct);
        }

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, LeaveStatus.Draft, request.InitialStatus, null, "create", afterSnapshot, null, ct);

        await _impact.RecalculateAsync(request.EmployeeId, "leave-created", ct);

        return SuccessMessage.Create.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> UpdateAsync(Guid leaveId, LeaveUpdateRequest request, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var errors = await _verification.ValidateUpdateAsync(leave, request, ct);
        if (errors.Count > 0)
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = string.Join("; ", errors) });

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var oldDays = leave.CountOfDays ?? 0;
        var oldTypeOfLeaveId = leave.TypeOfLeaveId;

        if (request.NormalLeaveTypeId.HasValue) leave.NormalLeaveTypeId = request.NormalLeaveTypeId;
        if (request.TypeOfLeaveId.HasValue) leave.TypeOfLeaveId = request.TypeOfLeaveId.Value;
        if (request.SicknessTypeId.HasValue) leave.SicknessTypeId = request.SicknessTypeId;
        if (request.LongLeaveTypeId.HasValue) leave.LongLeaveTypeId = request.LongLeaveTypeId;
        if (request.OrderNo != null) leave.OrderNo = request.OrderNo;
        if (request.OrderDate.HasValue) leave.OrderDate = request.OrderDate;
        if (request.FromDate.HasValue) leave.FromDate = request.FromDate;
        if (request.ToDate.HasValue) leave.ToDate = request.ToDate;
        if (request.CountOfDays.HasValue) leave.CountOfDays = request.CountOfDays;
        if (request.CountOfMinutes.HasValue) leave.CountOfMinutes = request.CountOfMinutes;
        if (request.SalaryStatusId.HasValue) leave.SalaryStatusId = request.SalaryStatusId.Value;
        if (request.IsInside.HasValue) leave.IsInside = request.IsInside;
        if (request.Reason != null) leave.Reason = request.Reason;
        if (request.Note != null) leave.Note = request.Note;
        if (request.CountryId.HasValue) leave.CountryId = request.CountryId;
        leave.LastUpdateAt = DateTime.UtcNow;

        _leavesRepository.Update(leave);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, leave.LeaveStatusId, leave.LeaveStatusId, null, "update", beforeSnapshot, afterSnapshot, ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> SubmitAsync(Guid leaveId, Guid? userId, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var fromStatus = leave.LeaveStatusId;

        if (!await _lifecycle.TransitionAsync(leave, LeaveStatus.PendingApproval, userId, null, beforeSnapshot, null, ct))
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = $"لا يمكن الانتقال من {fromStatus} إلى {LeaveStatus.PendingApproval}" });

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, fromStatus, LeaveStatus.PendingApproval, userId, "submit", beforeSnapshot, afterSnapshot, ct);

        await NotifyEmployeeAsync(leave.EmployeeId, NotificationType.LeaveSubmitted, "تم تقديم طلب الإجازة للموافقة", null, ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> ApproveAsync(Guid leaveId, Guid approverId, string? note, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var fromStatus = leave.LeaveStatusId;

        leave.ApproverId = approverId;
        leave.ApprovalNote = note;

        var targetStatus = leave.FromDate.HasValue && leave.FromDate.Value <= DateOnly.FromDateTime(DateTime.Now)
            ? LeaveStatus.Active
            : LeaveStatus.Approved;

        if (!await _lifecycle.TransitionAsync(leave, targetStatus, approverId, note, beforeSnapshot, null, ct))
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = $"لا يمكن الانتقال من {fromStatus} إلى {targetStatus}" });

        if (leave.CountOfDays.HasValue && targetStatus == LeaveStatus.Active)
        {
            await _balance.CommitAsync(leave.EmployeeId, leave.CountOfDays.Value, leave.TypeOfLeaveId, note ?? "approve", ct);
        }

        await _leaveApprovalRepository.Create(new LeaveApproval
        {
            LeaveId = leaveId,
            ApproverId = approverId,
            Decision = targetStatus,
            DecidedAt = DateTime.UtcNow,
            Note = note,
            CreateAt = DateTime.UtcNow,
            CreateBy = approverId
        }, ct);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, fromStatus, targetStatus, approverId, note ?? "approve", beforeSnapshot, afterSnapshot, ct);

        await _impact.RecalculateAsync(leave.EmployeeId, "leave-approved", ct);

        await NotifyEmployeeAsync(leave.EmployeeId, NotificationType.LeaveApproved, "تمت الموافقة على الإجازة", note, ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> RejectAsync(Guid leaveId, Guid approverId, string? note, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var fromStatus = leave.LeaveStatusId;

        if (!await _lifecycle.TransitionAsync(leave, LeaveStatus.Rejected, approverId, note, beforeSnapshot, null, ct))
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = $"لا يمكن الانتقال من {fromStatus} إلى {LeaveStatus.Rejected}" });

        await _leaveApprovalRepository.Create(new LeaveApproval
        {
            LeaveId = leaveId,
            ApproverId = approverId,
            Decision = LeaveStatus.Rejected,
            DecidedAt = DateTime.UtcNow,
            Note = note,
            CreateAt = DateTime.UtcNow,
            CreateBy = approverId
        }, ct);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, fromStatus, LeaveStatus.Rejected, approverId, note ?? "reject", beforeSnapshot, afterSnapshot, ct);

        await NotifyEmployeeAsync(leave.EmployeeId, NotificationType.LeaveRejected, "تم رفض الإجازة", note, ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> CancelAsync(Guid leaveId, Guid? userId, string? reason, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var fromStatus = leave.LeaveStatusId;
        var wasActiveOrApproved = fromStatus is LeaveStatus.Active or LeaveStatus.Approved;

        if (!await _lifecycle.TransitionAsync(leave, LeaveStatus.Cancelled, userId, reason, beforeSnapshot, null, ct))
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = $"لا يمكن إلغاء إجازة بحالة {fromStatus}" });

        leave.Note = string.IsNullOrEmpty(leave.Note) ? reason : $"{leave.Note}; إلغاء: {reason}";

        if (wasActiveOrApproved && leave.CountOfDays.HasValue)
        {
            await _balance.ReleaseAsync(leave.EmployeeId, leave.CountOfDays.Value, leave.TypeOfLeaveId, reason ?? "cancel", ct);
        }

        _leavesRepository.Update(leave);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, fromStatus, LeaveStatus.Cancelled, userId, reason ?? "cancel", beforeSnapshot, afterSnapshot, ct);

        if (wasActiveOrApproved)
            await _impact.RecalculateAsync(leave.EmployeeId, "leave-cancelled", ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> CutAsync(Guid leaveId, int daysToCut, string? reason, bool adjustBalance, Guid? userId, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        if (leave.LeaveStatusId is not (LeaveStatus.Active or LeaveStatus.Approved))
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = "يمكن قطع الإجازة النشطة أو المعتمدة فقط" });

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);

        leave.CountOfDays = Math.Max(0, (leave.CountOfDays ?? 0) - daysToCut);
        leave.CutReason = reason;
        leave.Note = string.IsNullOrEmpty(leave.Note) ? reason : $"{leave.Note}; قطع: {reason}";
        leave.LastUpdateAt = DateTime.UtcNow;
        leave.LastUpdateBy = userId;

        _leavesRepository.Update(leave);

        if (adjustBalance)
            await _balance.ReleaseAsync(leave.EmployeeId, daysToCut, leave.TypeOfLeaveId, reason ?? "cut", ct);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, leave.LeaveStatusId, leave.LeaveStatusId, userId, reason ?? "cut", beforeSnapshot, afterSnapshot, ct);

        await _impact.RecalculateAsync(leave.EmployeeId, "leave-cut", ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> ExtendAsync(Guid leaveId, LeaveExtensionRequest request, Guid? userId, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == leave.TypeOfLeaveId, cancellationToken: ct);
        if (typeOfLeave is { AllowsExtension: false })
            return Response<bool>.Fail(new MessageResponse { Code = "400", Message = "نوع الإجازة لا يسمح بالتمديد" });

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var oldDays = leave.CountOfDays ?? 0;

        leave.ToDate = request.NewEndDate;
        leave.CountOfDays = oldDays + request.ExtensionDays;
        leave.LastUpdateAt = DateTime.UtcNow;
        leave.LastUpdateBy = userId;

        _leavesRepository.Update(leave);

        await _leaveExtensionRepository.Create(new LeaveExtension
        {
            LeaveId = leaveId,
            ExtensionDays = request.ExtensionDays,
            NewEndDate = request.NewEndDate,
            OrderNo = request.OrderNo,
            OrderDate = request.OrderDate,
            Reason = request.Reason,
            CreatedAt = DateTime.UtcNow,
            CreateAt = DateTime.UtcNow,
            CreateBy = userId
        }, ct);

        if (leave.LeaveStatusId == LeaveStatus.Active)
            await _balance.CommitAsync(leave.EmployeeId, request.ExtensionDays, leave.TypeOfLeaveId, request.Reason ?? "extend", ct);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, leave.LeaveStatusId, leave.LeaveStatusId, userId, request.Reason ?? "extend", beforeSnapshot, afterSnapshot, ct);

        await _impact.RecalculateAsync(leave.EmployeeId, "leave-extended", ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    public async Task<Response<bool>> ReturnAsync(Guid leaveId, LeaveReturnRequest request, Guid? userId, CancellationToken ct)
    {
        var leave = await _leavesRepository.Find(x => x.Id == leaveId, cancellationToken: ct);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        var beforeSnapshot = await _audit.SnapshotAsync(leave, ct);
        var fromStatus = leave.LeaveStatusId;

        leave.HireDate = request.ReturnDate;
        leave.HireOrderNo = request.OrderNo;
        leave.HireOrderDate = request.OrderDate;
        leave.Note = string.IsNullOrEmpty(leave.Note) ? request.Remarks : $"{leave.Note}; العودة: {request.Remarks}";

        if (leave.LeaveStatusId != LeaveStatus.Expired)
            await _lifecycle.TransitionAsync(leave, LeaveStatus.Expired, userId, "return-to-work", beforeSnapshot, null, ct);

        _leavesRepository.Update(leave);

        var afterSnapshot = await _audit.SnapshotAsync(leave, ct);
        await _audit.LogTransitionAsync(leave.Id, fromStatus, leave.LeaveStatusId, userId, request.Remarks ?? "return", beforeSnapshot, afterSnapshot, ct);

        await _impact.RecalculateAsync(leave.EmployeeId, "leave-return", ct);

        if (fromStatus != LeaveStatus.Expired)
            await NotifyEmployeeAsync(leave.EmployeeId, NotificationType.LeaveExpired, "انتهت الإجازة وعاد الموظف إلى العمل", null, ct);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }

    private async Task NotifyEmployeeAsync(Guid employeeId, NotificationType type, string body, string? note, CancellationToken ct)
    {
        await _notificationRepository.Create(new TeamNotifications
        {
            TeamId = employeeId,
            EmployeeId = employeeId,
            Body = body,
            Note = note ?? string.Empty,
            Type = type,
            NotificationDate = DateTime.Now
        }, ct);
    }
}
