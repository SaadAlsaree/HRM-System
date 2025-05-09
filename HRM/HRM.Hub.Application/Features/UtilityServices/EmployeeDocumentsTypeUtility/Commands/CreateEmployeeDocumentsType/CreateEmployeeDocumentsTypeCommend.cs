using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.CreateEmployeeDocumentsType;

public class CreateEmployeeDocumentsTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
