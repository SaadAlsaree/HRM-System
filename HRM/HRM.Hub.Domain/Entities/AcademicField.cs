namespace HRM.Hub.Domain.Entities;

public class AcademicField : BaseEntity<int>
{
    public string Name { get; set; }
    

    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();

    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
}
