using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveLifecycleService : ILeaveLifecycleService
{
    private static readonly Dictionary<LeaveStatus, HashSet<LeaveStatus>> _transitions = new()
    {
        { LeaveStatus.Draft, new() { LeaveStatus.PendingApproval, LeaveStatus.Cancelled } },
        { LeaveStatus.PendingApproval, new() { LeaveStatus.Approved, LeaveStatus.Rejected, LeaveStatus.Cancelled } },
        { LeaveStatus.Approved, new() { LeaveStatus.Active, LeaveStatus.Cancelled } },
        { LeaveStatus.Rejected, new HashSet<LeaveStatus>() },
        { LeaveStatus.Active, new() { LeaveStatus.Expired, LeaveStatus.Cancelled } },
        { LeaveStatus.Expired, new HashSet<LeaveStatus>() },
        { LeaveStatus.Cancelled, new HashSet<LeaveStatus>() },
    };

    private readonly IBaseRepository<Leaves> _leavesRepository;

    public LeaveLifecycleService(IBaseRepository<Leaves> leavesRepository)
    {
        _leavesRepository = leavesRepository;
    }

    public bool CanTransition(LeaveStatus from, LeaveStatus to)
    {
        return _transitions.TryGetValue(from, out var allowed) && allowed.Contains(to);
    }

    public async Task<bool> TransitionAsync(Leaves leave, LeaveStatus toStatus, Guid? userId, string? note, string? beforeSnapshot, string? afterSnapshot, CancellationToken ct)
    {
        var fromStatus = leave.LeaveStatusId;

        if (!CanTransition(fromStatus, toStatus))
            return false;

        leave.LeaveStatusId = toStatus;
        leave.LastUpdateAt = DateTime.UtcNow;
        leave.LastUpdateBy = userId;

        var now = DateTime.UtcNow;
        switch (toStatus)
        {
            case LeaveStatus.PendingApproval:
                leave.SubmittedAt = now;
                break;
            case LeaveStatus.Approved:
                leave.ApprovedAt = now;
                break;
            case LeaveStatus.Rejected:
                leave.RejectedAt = now;
                break;
            case LeaveStatus.Active:
                leave.ActivatedAt = now;
                break;
            case LeaveStatus.Expired:
                leave.ExpiredAt = now;
                break;
            case LeaveStatus.Cancelled:
                leave.CancelledAt = now;
                break;
        }

        _leavesRepository.Update(leave);
        return true;
    }
}
