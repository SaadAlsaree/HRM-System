using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatus;

public class GetStudyStatusQuery : IRequest<Response<PagedResult<GetStudyStatusViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
