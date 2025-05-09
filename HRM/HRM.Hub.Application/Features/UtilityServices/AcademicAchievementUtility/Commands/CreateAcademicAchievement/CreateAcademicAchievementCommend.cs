namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement;

public class CreateAcademicAchievementCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

    public int? JobDegreeId { get; set; }
}
