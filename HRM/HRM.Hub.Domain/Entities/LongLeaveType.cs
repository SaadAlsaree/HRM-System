namespace HRM.Hub.Domain.Entities;

public class LongLeaveType : BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>();
}
