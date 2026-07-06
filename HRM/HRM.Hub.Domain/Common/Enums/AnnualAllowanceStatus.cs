namespace HRM.Hub.Domain.Common.Enums;

public enum AnnualAllowanceStatus
{
    Eligible = 1,
    NotEligible = 2,
    DeferredPenalty = 3,
    DeferredLeave = 4,
    AwaitingService = 5,
    SuspendedTerminated = 6,
    Draft = 7,
    PendingApproval = 8,
    Approved = 9,
    Issued = 10,
    Cancelled = 11
}