using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBook;

public class GetTypeOfBookQuery : IRequest<Response<PagedResult<GetTypeOfBookViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
