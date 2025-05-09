namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPositionList;

public class GetPositionListQuery : IRequest<Response<IEnumerable<GetPositionListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}