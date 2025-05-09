namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementById;

public class GetAcademicAchievementByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public int? JobDegreeId { get; set; }
    public string JobDegreeName { get; set; }
    public Status Status { get; set; }
}