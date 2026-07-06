namespace HRM.Hub.Domain.Entities;

public class AcademicAchievement : BaseEntity<int>
{
    public string Name { get; set; }
    public int? JobDegreeId { get; set; }

    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();

    public virtual JobDegree JobDegree { get; set; } = default!;
    public virtual ICollection<PromotionAllowanceRule> PromotionAllowanceRules { get; set; } = new List<PromotionAllowanceRule>();
    public virtual ICollection<AnnualAllowanceRule> AnnualAllowanceRules { get; set; } = new List<AnnualAllowanceRule>();
    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievements { get; set; } = new List<CorrectingAcademicAchievements>();
}
