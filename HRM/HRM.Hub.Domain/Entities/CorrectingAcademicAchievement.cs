namespace HRM.Hub.Domain.Entities;
public class CorrectingAcademicAchievements:BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int? DegreeFromId { get; set; }
    public int? DegreeToId { get; set; }
    public int? JobCategoryFromId { get; set; }
    public int? JobCategoryToId { get; set; }
    public int JobTitleFromId { get; set; }
    public int JobDescriptionFromId { get; set; }
    public int JobTitleToId { get; set; }
    public int JobDescriptionToId { get; set; }
    public DateOnly? DueDateDegree { get; set; }
    public DateOnly? DueDateCategory { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public int? AcademicAchievementId { get; set; }
    public bool? IsCertificateCalculation { get; set; }
    public string Note { get; set; }
    
    public virtual JobDegree DegreeFrom { get; set; }

    public virtual JobDegree DegreeTo { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual JobCategory JobCategoryFrom { get; set; }

    public virtual JobCategory JobCategoryTo { get; set; }

    public virtual JobDescription JobDescriptionFrom { get; set; }
    public virtual JobDescription JobDescriptionTo { get; set; }
    public virtual JobTitle JobTitleFrom { get; set; }
    public virtual JobTitle JobTitleTo { get; set; }
    public virtual AcademicAchievement AcademicAchievement { get; set; }
}
