namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementById;

public class GetAcademicAchievementByIdQuery : IRequest<Response<GetAcademicAchievementByIdViewModel>>
{
    public int Id { get; set; }
}