namespace HRM.Hub.Domain.Entities;

public class HandPull: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string WithdrawHandPullOrderNo { get; set; }
    public DateTime? WithdrawHandPullOrderDate { get; set; }
    public string RaiseHandPullOrderNo { get; set; }
    public DateTime? RaiseHandPullOrderDate { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }

}