namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementList;

public class GetAcademicAchievementListQuery : IRequest<Response<IEnumerable<GetAcademicAchievementListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}