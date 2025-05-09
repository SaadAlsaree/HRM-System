using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsType;

public class GetEmployeeDocumentsTypeQuery : IRequest<Response<PagedResult<GetEmployeeDocumentsTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
