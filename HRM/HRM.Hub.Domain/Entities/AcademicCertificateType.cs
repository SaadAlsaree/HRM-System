namespace HRM.Hub.Domain.Entities;

public class AcademicCertificateType : BaseEntity<int>
{
    public string Name { get; set; }

    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
}
