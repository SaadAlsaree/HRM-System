using HRM.Hub.Application.Helper;
namespace HRM.Hub.Application.Features.EmployeeDocument.Commands.UpdateEmployeeDocument;

public class UpdateDocumentCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public int EmployeeDocumentTypeId { get; set; }
    public List<DocumentAttribute> DocumentAttributes { get; set; }
    [SwaggerIgnore]
    public string DocumentAttribute { get; set; }
    public string Notes { get; set; }

}
