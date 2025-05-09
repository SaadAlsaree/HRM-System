
namespace HRM.Hub.Domain.Entities;

public class JobDegree: BaseEntity<int>
{
    public string Name { get; set; }
    public int Index { get; set; }
    public decimal IncreaseAmount { get; set; }
    public int NextPromotion { get; set; }

    public virtual ICollection<ChangeDegrees> ChangeDegreeFrom { get; set; } = new List<ChangeDegrees>();

    public virtual ICollection<ChangeDegrees> ChangeDegreeTo { get; set; } = new List<ChangeDegrees>();

    public virtual ICollection<JobCategory> JobCategory { get; set; } = new List<JobCategory>();

    public virtual ICollection<AcademicAchievement> AcademicAchievement { get; set; } = new List<AcademicAchievement>();

    public virtual ICollection<JobTitle> JobTitle { get; set; } = new List<JobTitle>();

    public virtual ICollection<ManagementInformation> ManagementInformationEmploymentDegree { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<ManagementInformation> ManagementInformationStopJobDegree { get; set; } = new List<ManagementInformation>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementDegreeFrom { get; set; } = new List<CorrectingAcademicAchievements>();

    public virtual ICollection<Promotion> Promotions { get; set; } = new List<Promotion>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementDegreeTo { get; set; } = new List<CorrectingAcademicAchievements>();
}
