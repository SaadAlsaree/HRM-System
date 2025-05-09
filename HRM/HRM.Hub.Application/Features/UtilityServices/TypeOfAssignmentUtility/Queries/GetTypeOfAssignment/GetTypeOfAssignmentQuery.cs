using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignment;

public class GetTypeOfAssignmentQuery : IRequest<Response<PagedResult<GetTypeOfAssignmentViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
