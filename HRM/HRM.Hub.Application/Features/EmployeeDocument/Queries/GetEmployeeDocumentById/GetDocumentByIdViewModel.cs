namespace HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocumentById;
public class GetDocumentByIdViewModel : BaseViewModel<Guid>
{
    public int? EmployeeDocumentTypeId { get; set; }
    public object DocumentAttributes { get; set; }
    public string EmployeeDocumentTypeName { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Notes { get; set; }
}