using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Commands.CreatePosition;

public class CreatePositionCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
