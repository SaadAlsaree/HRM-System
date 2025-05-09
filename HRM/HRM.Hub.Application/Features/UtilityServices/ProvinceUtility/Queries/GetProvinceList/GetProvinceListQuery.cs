namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Queries.GetProvinceList;

public class GetProvinceListQuery : IRequest<Response<IEnumerable<GetProvinceListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}