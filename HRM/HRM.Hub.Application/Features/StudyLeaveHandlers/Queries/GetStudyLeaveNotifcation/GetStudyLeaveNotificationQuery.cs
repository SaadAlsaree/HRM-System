using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveNotifcation;

public class GetStudyLeaveNotificationQuery:IRequest<Response<PagedResult<GetStudyLeaveNotificationViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}