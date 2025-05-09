using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Commands.CreateTypeOfJob;

public class CreateTypeOfJobCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
