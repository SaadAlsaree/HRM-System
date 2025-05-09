using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Commands.CreateLevelOfRelationship;

public class CreateLevelOfRelationshipCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
