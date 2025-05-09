using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Commands.CreateGovernorate;

public class CreateGovernorateCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
