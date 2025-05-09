namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnitList;

public class GetUnitListQuery : IRequest<Response<IEnumerable<GetUnitListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}