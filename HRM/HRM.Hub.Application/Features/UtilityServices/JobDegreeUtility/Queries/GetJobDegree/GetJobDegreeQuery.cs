using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegree;

public class GetJobDegreeQuery : IRequest<Response<PagedResult<GetJobDegreeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
