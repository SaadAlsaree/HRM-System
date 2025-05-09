namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateList;

public class GetSubDirectorateListQuery : IRequest<Response<IEnumerable<GetSubDirectorateListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}