namespace HRM.Hub.Domain.Entities;

public class JobDescription: BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<ChangeJobTitle> ChangeJobTitleNewJobDescription { get; set; } = new List<ChangeJobTitle>();

    public virtual ICollection<ChangeJobTitle> ChangeJobTitleOldJobDescription { get; set; } = new List<ChangeJobTitle>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementsDescriptionFrom { get; set; } = new List<CorrectingAcademicAchievements>();

    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementsDescriptionTo { get; set; } = new List<CorrectingAcademicAchievements>();

    public virtual ICollection<ChangeDegrees> ChangeDegreeJobDescriptionFrom { get; set; } = new List<ChangeDegrees>();

    public virtual ICollection<ChangeDegrees> ChangeDegreeJobDescriptionTo { get; set; } = new List<ChangeDegrees>();
}
