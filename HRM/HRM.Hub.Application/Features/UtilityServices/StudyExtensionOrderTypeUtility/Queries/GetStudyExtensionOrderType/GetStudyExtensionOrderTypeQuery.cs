using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderType;

public class GetStudyExtensionOrderTypeQuery : IRequest<Response<PagedResult<GetStudyExtensionOrderTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
