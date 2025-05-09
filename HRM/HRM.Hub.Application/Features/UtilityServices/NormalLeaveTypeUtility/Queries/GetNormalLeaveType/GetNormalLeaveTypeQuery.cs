using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveType;

public class GetNormalLeaveTypeQuery : IRequest<Response<PagedResult<GetNormalLeaveTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
