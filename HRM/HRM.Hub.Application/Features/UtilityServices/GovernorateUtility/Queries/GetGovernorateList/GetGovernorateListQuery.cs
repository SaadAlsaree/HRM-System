namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorateList;

public class GetGovernorateListQuery : IRequest<Response<IEnumerable<GetGovernorateListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}