namespace HRM.Hub.Domain.Entities;

public class EmployeeDocumentsType : BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<EmployeeDocuments> EmployeeDocuments { get; set; } = new List<EmployeeDocuments>();
}
