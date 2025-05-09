
namespace HRM.Hub.Application.Features.EmployeeDocument.Commands.AddEmployeeDocument;
public class AddDocumentCommand:IRequest<Response<bool>> 
{
    public Guid EmployeeId { get; set; }
    public int EmployeeDocumentTypeId { get; set; }
    public List<DocumentAttribute> DocumentAttributes { get; set; }
    public string Notes { get; set; }
}