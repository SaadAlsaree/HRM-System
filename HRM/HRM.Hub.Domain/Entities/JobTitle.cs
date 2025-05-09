namespace HRM.Hub.Domain.Entities;

public class JobTitle: BaseEntity<int>
{
    public int DegreeId { get; set; }

    public string Name { get; set; }

    public virtual JobDegree Degree { get; set; }

    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<ChangeJobTitle> ChangeJobTitleNewJobTitle { get; set; } = new List<ChangeJobTitle>();

    public virtual ICollection<ChangeJobTitle> ChangeJobTitleOldJobTitle { get; set; } = new List<ChangeJobTitle>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementsJobTitleFrom { get; set; } = new List<CorrectingAcademicAchievements>();

    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievementsJobTitleTo { get; set; } = new List<CorrectingAcademicAchievements>();


    public virtual ICollection<ChangeDegrees> ChangeDegreeJobTitleFrom { get; set; } = new List<ChangeDegrees>();

    public virtual ICollection<ChangeDegrees> ChangeDegreeJobTitleTo { get; set; } = new List<ChangeDegrees>();
}
