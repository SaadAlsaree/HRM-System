namespace HRM.Hub.Domain.Entities;

public class ChangeDegrees: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int JobDegreeFromId { get; set; }
    public int JobDegreeToId { get; set; }
    public int JobCategoryFromId { get; set; }
    public int JobCategoryToId { get; set; }
    public int JobTitleFromId { get; set; }
    public int JobDescriptionFromId { get; set; }
    public int JobTitleToId { get; set; }
    public int JobDescriptionToId { get; set; }
    public DateOnly OldDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly OldCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }
    
    public virtual Employees Employee { get; set; }
    public virtual JobDegree JobDegreeFrom { get; set; }
    public virtual JobDegree JobDegreeTo { get; set; }
    public virtual JobCategory JobCategoryFrom { get; set; }
    public virtual JobCategory JobCategoryTo { get; set; }
    public virtual JobDescription JobDescriptionFrom { get; set; }
    public virtual JobDescription JobDescriptionTo { get; set; }
    public virtual JobTitle JobTitleFrom { get; set; }
    public virtual JobTitle JobTitleTo { get; set; }
}
