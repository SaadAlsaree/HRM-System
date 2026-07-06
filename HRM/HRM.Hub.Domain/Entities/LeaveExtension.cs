namespace HRM.Hub.Domain.Entities;

public class LeaveExtension : BaseEntity<long>
{
    public Guid LeaveId { get; set; }
    public int ExtensionDays { get; set; }
    public DateOnly NewEndDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Reason { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public virtual Leaves Leave { get; set; }
}