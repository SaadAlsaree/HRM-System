namespace HRM.Hub.Domain.Entities;
public class ChangeJobTitle:BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int? NewJobTitleId { get; set; }
    public int? NewJobDescriptionId { get; set; }
    public int? OldJobTitleId { get; set; }
    public int? OldJobDescriptionId { get; set; }
    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }
    
    public virtual JobDescription NewJobDescription { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual JobTitle NewJobTitle { get; set; }
    public virtual JobDescription OldJobDescription { get; set; }
    public virtual JobTitle OldJobTitle { get; set; }
}