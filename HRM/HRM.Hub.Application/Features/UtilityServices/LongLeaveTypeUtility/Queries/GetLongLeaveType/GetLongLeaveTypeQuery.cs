namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveType;

public class GetLongLeaveTypeQuery : IRequest<Response<PagedResult<GetLongLeaveTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
