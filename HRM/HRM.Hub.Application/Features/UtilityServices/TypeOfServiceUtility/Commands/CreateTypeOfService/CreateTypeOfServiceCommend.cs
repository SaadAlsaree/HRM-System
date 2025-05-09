using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Commands.CreateTypeOfService;

public class CreateTypeOfServiceCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
