namespace HRM.Hub.Domain.Entities;

public class PromotionLogs: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int JobDegreeFromId { get; set; }
    public int JobDegreeToId { get; set; }
    public int JobCategoryFromId { get; set; }
    public int JobCategoryToId { get; set; }
    public int JobTitleFromId { get; set; }
    public int JobTitleToId { get; set; }
    public DateOnly? DueDateDegreeFrom { get; set; }
    public DateOnly? DueDateDegreeTo { get; set; }
    public DateOnly? DueDateCategoryFrom { get; set; }
    public DateOnly? DueDateCategoryTo { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime? AdministrativeOrderDate { get; set; }
    public string MinistryOfFinanceBookNo { get; set; }
    public DateTime? MinistryOfFinanceBookDate { get; set; }
    public string Note { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual JobDegree JobDegreeTo { get; set; }
    public virtual JobDegree JobDegreeFrom { get; set; }
    public virtual JobCategory JobCategoryTo { get; set; }
    public virtual JobCategory JobCategoryFrom { get; set; }
    public virtual JobTitle JobTitleTo { get; set; }
    public virtual JobTitle JobTitleFrom { get; set; }
}
