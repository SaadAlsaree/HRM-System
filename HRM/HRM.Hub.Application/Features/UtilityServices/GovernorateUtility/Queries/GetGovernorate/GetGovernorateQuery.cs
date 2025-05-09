using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorate;

public class GetGovernorateQuery : IRequest<Response<PagedResult<GetGovernorateViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
