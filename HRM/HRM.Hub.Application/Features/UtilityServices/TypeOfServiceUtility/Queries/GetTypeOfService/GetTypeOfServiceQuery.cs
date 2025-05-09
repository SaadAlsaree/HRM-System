using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfService;

public class GetTypeOfServiceQuery : IRequest<Response<PagedResult<GetTypeOfServiceViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
