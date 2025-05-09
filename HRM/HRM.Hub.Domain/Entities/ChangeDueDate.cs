namespace HRM.Hub.Domain.Entities;
public class ChangeDueDates: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateOnly CurrentDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly CurrentCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }
}
