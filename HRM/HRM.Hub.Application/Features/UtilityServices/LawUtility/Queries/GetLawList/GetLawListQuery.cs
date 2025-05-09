namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLawList;

public class GetLawListQuery : IRequest<Response<IEnumerable<GetLawListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}