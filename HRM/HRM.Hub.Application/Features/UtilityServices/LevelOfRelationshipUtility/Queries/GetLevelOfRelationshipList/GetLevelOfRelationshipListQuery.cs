namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Queries.GetLevelOfRelationshipList;

public class GetLevelOfRelationshipListQuery : IRequest<Response<IEnumerable<GetLevelOfRelationshipListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}