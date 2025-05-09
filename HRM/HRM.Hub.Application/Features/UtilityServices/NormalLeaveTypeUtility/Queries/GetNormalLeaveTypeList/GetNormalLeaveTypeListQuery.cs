namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveTypeList;

public class GetNormalLeaveTypeListQuery : IRequest<Response<IEnumerable<GetNormalLeaveTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}