namespace HRM.Hub.Domain.Entities;

public class LeavesBalance: BaseEntity<Guid>
{
    public int? Balance { get; set; }
    public string Note { get; set; }
    public virtual Employees Employee { get; set; }
}
