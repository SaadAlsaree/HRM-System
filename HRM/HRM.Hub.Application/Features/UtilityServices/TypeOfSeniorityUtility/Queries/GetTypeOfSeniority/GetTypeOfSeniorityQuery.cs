using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniority;

public class GetTypeOfSeniorityQuery : IRequest<Response<PagedResult<GetTypeOfSeniorityViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
