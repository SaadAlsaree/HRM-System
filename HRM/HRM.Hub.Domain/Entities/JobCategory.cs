namespace HRM.Hub.Domain.Entities;
public class JobCategory: BaseEntity<int>
{
    public int DegreeId { get; set; }
    public decimal IncreaseAmount { get; set; }
    public string Name { get; set; }
    public int Index { get; set; }
    public int NextPromotion { get; set; }
    public virtual JobDegree Degree { get; set; }

    public virtual ICollection<Promotion> Promotions { get; set; } = new List<Promotion>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementDegreeFrom { get; set; } = new List<CorrectingAcademicAchievements>();

    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementJobCategoryTo { get; set; } = new List<CorrectingAcademicAchievements>();
    public virtual ICollection<ChangeDegrees> ChangeDegreeFrom { get; set; } = new List<ChangeDegrees>();

    public virtual ICollection<ChangeDegrees> ChangeDegreeTo { get; set; } = new List<ChangeDegrees>();
}
