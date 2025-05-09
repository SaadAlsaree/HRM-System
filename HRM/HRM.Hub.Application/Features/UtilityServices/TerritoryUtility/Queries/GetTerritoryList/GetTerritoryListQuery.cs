namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritoryList;

public class GetTerritoryListQuery : IRequest<Response<IEnumerable<GetTerritoryListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}