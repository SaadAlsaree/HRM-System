using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveAuditService : ILeaveAuditService
{
    private readonly IBaseRepository<LeaveTransitionLog> _transitionLogRepository;

    public LeaveAuditService(IBaseRepository<LeaveTransitionLog> transitionLogRepository)
    {
        _transitionLogRepository = transitionLogRepository;
    }

    public async Task LogTransitionAsync(Guid leaveId, LeaveStatus fromStatus, LeaveStatus toStatus, Guid? userId, string? note, string? beforeSnapshot, string? afterSnapshot, CancellationToken ct)
    {
        var log = new LeaveTransitionLog
        {
            LeaveId = leaveId,
            FromStatus = fromStatus,
            ToStatus = toStatus,
            TransitionedAt = DateTime.UtcNow,
            TransitionedBy = userId,
            Note = note,
            BeforeSnapshot = beforeSnapshot,
            AfterSnapshot = afterSnapshot,
            CreateAt = DateTime.UtcNow,
            CreateBy = userId
        };

        await _transitionLogRepository.Create(log, ct);
    }

    public Task<string> SnapshotAsync(Leaves leave, CancellationToken ct)
    {
        var snapshot = new
        {
            leave.Id,
            leave.EmployeeId,
            leave.TypeOfLeaveId,
            leave.LeaveStatusId,
            leave.FromDate,
            leave.ToDate,
            leave.CountOfDays,
            leave.SalaryStatusId,
            leave.Note,
            leave.Reason
        };
        return Task.FromResult(JsonConvert.SerializeObject(snapshot, Formatting.None));
    }
}
