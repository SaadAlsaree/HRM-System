using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Commands.CreateDirectorate;

public class CreateDirectorateCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

    public string ShortKey { get; set; }
}
