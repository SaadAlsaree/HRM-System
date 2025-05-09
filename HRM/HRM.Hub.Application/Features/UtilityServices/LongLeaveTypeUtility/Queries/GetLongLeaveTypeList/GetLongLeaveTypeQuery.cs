namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveTypeList;

public class GetLongLeaveTypeListQuery : IRequest<Response<IEnumerable<GetLongLeaveTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}