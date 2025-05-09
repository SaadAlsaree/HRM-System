namespace HRM.Hub.Domain.Entities;

public class EducationInformation : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string OriginalDocument { get; set; }
    public string DocumentNo { get; set; }
    public DateOnly? DocumentDate { get; set; }
    public string DocumentSender { get; set; }
    public DateOnly? DocumentSendDate { get; set; }
    public int AcademicAchievementId { get; set; }
    public int AcademicFieldId { get; set; }
    public int PreciseAcademicFieldId { get; set; }
    public string NameOfIssuingCertificate { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public decimal Average { get; set; }
    public string GraduationYear { get; set; }
    public bool IsDuringRecruitment { get; set; }
    public bool IsDocumentVerify { get; set; }
    public bool IsInHiring { get; set; }
    public bool IsCurrent { get; set; }
    public int CountryId { get; set; }
    public int StudyTypeId { get; set; }
    public string Notes { get; set; }
    public virtual AcademicAchievement AcademicAchievement { get; set; }
    public virtual AcademicField AcademicField { get; set; }
    public virtual Country Country { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual PreciseAcademicField PreciseAcademicField { get; set; }
    public virtual StudyType StudyType { get; set; }
}
