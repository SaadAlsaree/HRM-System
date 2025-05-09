using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Commands.UpdateTerritory;

public class UpdateTerritoryCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
