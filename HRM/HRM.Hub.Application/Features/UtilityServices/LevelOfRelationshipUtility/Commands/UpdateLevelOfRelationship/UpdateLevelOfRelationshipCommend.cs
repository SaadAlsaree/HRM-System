using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Commands.UpdateLevelOfRelationship;

public class UpdateLevelOfRelationshipCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
