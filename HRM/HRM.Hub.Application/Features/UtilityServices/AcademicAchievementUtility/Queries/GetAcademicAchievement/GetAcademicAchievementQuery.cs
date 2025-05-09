using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;

public class GetAcademicAchievementQuery : IRequest<Response<PagedResult<GetAcademicAchievementViewModel>>>, IPaginationQuery
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
}