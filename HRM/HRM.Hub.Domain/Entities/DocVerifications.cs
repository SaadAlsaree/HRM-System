namespace HRM.Hub.Domain.Entities;
public class DocVerifications : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string DocumentNumber { get; set; }
    public DateOnly DocumentDate { get; set; }
    public string Recipient { get; set; }
    public bool Answered { get; set; }
    public DateOnly SendingDate { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }
    
}