using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.UpdateEmployeeDocumentsType;

public class UpdateEmployeeDocumentsTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
