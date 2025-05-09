namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorateList;

public class GetDirectorateListQuery : IRequest<Response<IEnumerable<GetDirectorateListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}