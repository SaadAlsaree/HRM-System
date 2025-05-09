using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicField;

public class GetPreciseAcademicFieldQuery : IRequest<Response<PagedResult<GetPreciseAcademicFieldViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
