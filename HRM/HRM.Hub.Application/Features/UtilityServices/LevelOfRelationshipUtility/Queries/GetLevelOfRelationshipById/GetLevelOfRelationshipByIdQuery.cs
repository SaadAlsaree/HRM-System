namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Queries.GetLevelOfRelationshipById;

public class GetLevelOfRelationshipByIdQuery : IRequest<Response<GetLevelOfRelationshipByIdViewModel>>
{
    public int Id { get; set; }
}