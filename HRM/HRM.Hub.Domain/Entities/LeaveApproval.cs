using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class LeaveApproval : BaseEntity<long>
{
    public Guid LeaveId { get; set; }
    public Guid ApproverId { get; set; }
    public LeaveStatus Decision { get; set; }
    public DateTime DecidedAt { get; set; } = DateTime.UtcNow;
    public string Note { get; set; }

    public virtual Leaves Leave { get; set; }
}