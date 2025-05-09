using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Commands.CreateTerritory;

public class CreateTerritoryCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
