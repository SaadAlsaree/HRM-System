namespace HRM.Hub.Domain.Entities;

public class Resignation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string Reason { get; set; }
    public DateTime? RequestDate { get; set; }
    public string RequestNo { get; set; }
    public string ResignationOrderNo { get; set; }
    public DateTime? ResignationOrderDate { get; set; }
    public string SeparationOrderNo { get; set; }
    public DateTime? SeparationOrderDate { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }

}