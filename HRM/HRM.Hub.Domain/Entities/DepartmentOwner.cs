namespace HRM.Hub.Domain.Entities;

public class DepartmentOwner : BaseEntity<Guid>
{
    public int DepartmentId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public bool IsActive { get; set; } = true;
    public virtual Departments Department { get; set; }
    public virtual Employees Employee { get; set; }
}
