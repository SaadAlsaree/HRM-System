using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyType;

public class GetStudyTypeQuery : IRequest<Response<PagedResult<GetStudyTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
