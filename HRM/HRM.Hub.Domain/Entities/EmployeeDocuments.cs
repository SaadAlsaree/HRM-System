namespace HRM.Hub.Domain.Entities;

public class EmployeeDocuments: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int? EmployeeDocumentTypeId { get; set; }
    public string DocumentAttribute { get; set; }
    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual EmployeeDocumentsType EmployeeDocumentType { get; set; }
}
