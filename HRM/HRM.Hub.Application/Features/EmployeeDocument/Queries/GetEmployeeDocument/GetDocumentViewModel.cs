namespace HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocument;
public class GetDocumentViewModel : BaseViewModel<Guid>
{
    public int? EmployeeDocumentTypeId { get; set; }
    public string EmployeeDocumentTypeName { get; set; }
    public object DocumentAttribute { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Note { get; set; }
}