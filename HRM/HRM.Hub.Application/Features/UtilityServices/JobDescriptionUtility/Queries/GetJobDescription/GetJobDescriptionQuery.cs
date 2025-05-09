using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescription;

public class GetJobDescriptionQuery : IRequest<Response<PagedResult<GetJobDescriptionViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
