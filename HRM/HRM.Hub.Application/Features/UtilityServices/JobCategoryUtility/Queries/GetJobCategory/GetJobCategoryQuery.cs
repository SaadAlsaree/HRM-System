using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategory;

public class GetJobCategoryQuery : IRequest<Response<PagedResult<GetJobCategoryViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
