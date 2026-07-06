using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class LeaveTransitionLog : BaseEntity<long>
{
    public Guid LeaveId { get; set; }
    public LeaveStatus FromStatus { get; set; }
    public LeaveStatus ToStatus { get; set; }
    public DateTime TransitionedAt { get; set; } = DateTime.UtcNow;
    public Guid? TransitionedBy { get; set; }
    public string Note { get; set; }
    public string BeforeSnapshot { get; set; }
    public string AfterSnapshot { get; set; }

    public virtual Leaves Leave { get; set; }
}