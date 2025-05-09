namespace HRM.Hub.Domain.Entities;

public class ContactInformation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int? LevelOfRelationshipId { get; set; }
    public string PhoneNumber { get; set; }
    public string ContactName { get; set; }
    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual LevelOfRelationship LevelOfRelationship { get; set; }
}
