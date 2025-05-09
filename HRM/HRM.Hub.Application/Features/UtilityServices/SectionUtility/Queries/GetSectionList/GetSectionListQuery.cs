namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Queries.GetSectionList;

public class GetSectionListQuery : IRequest<Response<IEnumerable<GetSectionListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}