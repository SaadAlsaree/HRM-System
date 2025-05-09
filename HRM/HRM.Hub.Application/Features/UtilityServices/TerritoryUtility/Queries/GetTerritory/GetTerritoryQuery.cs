using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritory;

public class GetTerritoryQuery : IRequest<Response<PagedResult<GetTerritoryViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
