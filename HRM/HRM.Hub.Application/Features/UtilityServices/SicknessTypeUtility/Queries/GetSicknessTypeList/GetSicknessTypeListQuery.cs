namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessTypeList;

public class GetSicknessTypeListQuery : IRequest<Response<IEnumerable<GetSicknessTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}