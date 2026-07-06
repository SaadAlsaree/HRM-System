using HRM.Hub.Domain.Entities;

namespace HRM.Hub.Application.Contracts;

public interface ILeaveVerificationService
{
    Task<List<string>> ValidateCreateAsync(LeaveCreateRequest request, CancellationToken ct);
    Task<List<string>> ValidateUpdateAsync(Leaves leave, LeaveUpdateRequest request, CancellationToken ct);
    Task<bool> HasSufficientBalanceAsync(Guid employeeId, int typeOfLeaveId, int days, CancellationToken ct);
    Task<bool> HasOverlapAsync(Guid employeeId, DateOnly fromDate, DateOnly toDate, Guid? excludeLeaveId, CancellationToken ct);
}

public interface ILeaveBalanceService
{
    Task CommitAsync(Guid employeeId, int days, int typeOfLeaveId, string reason, CancellationToken ct);
    Task ReleaseAsync(Guid employeeId, int days, int typeOfLeaveId, string reason, CancellationToken ct);
    Task<LeavesBalance?> GetAsync(Guid employeeId, CancellationToken ct);
    Task RecomputeAsync(Guid employeeId, CancellationToken ct);
}

public interface ILeaveLifecycleService
{
    Task<bool> TransitionAsync(Leaves leave, LeaveStatus toStatus, Guid? userId, string? note, string? beforeSnapshot, string? afterSnapshot, CancellationToken ct);
    bool CanTransition(LeaveStatus from, LeaveStatus to);
}

public interface ILeaveImpactOrchestrator
{
    Task RecalculateAsync(Guid employeeId, string trigger, CancellationToken ct);
}

public interface ILeaveAuditService
{
    Task LogTransitionAsync(Guid leaveId, LeaveStatus fromStatus, LeaveStatus toStatus, Guid? userId, string? note, string? beforeSnapshot, string? afterSnapshot, CancellationToken ct);
    Task<string> SnapshotAsync(Leaves leave, CancellationToken ct);
}
