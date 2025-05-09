namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.GetById;
public class GetByIdCorrectingAcademicAchievementViewModel : BaseViewModel<Guid>
{
    public int? DegreeFromId { get; set; }
    public string DegreeFromName { get; set; }
    public int? DegreeToId { get; set; }
    public string DegreeToName { get; set; }
    public int? JobCategoryFromId { get; set; }
    public string JobCategoryFromName { get; set; }
    public int? JobCategoryToId { get; set; }
    public string JobCategoryToName { get; set; }
    public int JobTitleFromId { get; set; }
    public string JobTitleFromName { get; set; }
    public int JobDescriptionFromId { get; set; }
    public string JobDescriptionFromName { get; set; }
    public bool? IsCertificateCalculation { get; set; }
    public int JobTitleToId { get; set; }
    public string JobTitleToName { get; set; }
    public int JobDescriptionToId { get; set; }
    public string JobDescriptionToName { get; set; }
    public DateOnly? DueDateDegree { get; set; }
    public DateOnly? DueDateCategory { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public string Note { get; set; }
    public int? AcademicAchievementId { get; set; }
    public string AcademicAchievementName { get; set; }
}