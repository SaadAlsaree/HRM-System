namespace HRM.Hub.Domain.Entities;

public class AcademicAchievement : BaseEntity<int>
{
    public string Name { get; set; }
    public int? JobDegreeId { get; set; }

    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();

    public virtual JobDegree JobDegree { get; set; } = new JobDegree();
    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievements { get; set; } = new List<CorrectingAcademicAchievements>();
}
