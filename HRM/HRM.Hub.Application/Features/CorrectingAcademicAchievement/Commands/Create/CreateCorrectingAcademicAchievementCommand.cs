namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Commands.Create;
public class CreateCorrectingAcademicAchievementCommand:IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public int DegreeFromId { get; set; }
    public int DegreeToId { get; set; }
    public int JobCategoryFromId { get; set; }
    public int JobCategoryToId { get; set; }
    public int JobTitleFromId { get; set; }
    public int JobDescriptionFromId { get; set; }
    public int JobTitleToId { get; set; }
    public int JobDescriptionToId { get; set; }
    public DateOnly DueDateDegree { get; set; }
    public DateOnly DueDateCategory { get; set; }
    public int AcademicAchievementId { get; set; }
    public bool IsCertificateCalculation { get; set; }
    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }
    public string Note { get; set; }
    public Guid? CreateBy { get; set; }
}