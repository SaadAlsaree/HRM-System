using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicField;

public class GetAcademicFieldQuery : IRequest<Response<PagedResult<GetAcademicFieldViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
