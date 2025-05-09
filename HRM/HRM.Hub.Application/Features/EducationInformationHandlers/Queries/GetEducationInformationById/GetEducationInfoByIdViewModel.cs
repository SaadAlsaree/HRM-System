namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformationById;
public class GetEducationInfoByIdViewModel : BaseViewModel<Guid>
{
    public string OriginalDocument { get; set; }
    public string DocumentNo { get; set; }
    public DateOnly? DocumentDate { get; set; }
    public string DocumentSender { get; set; }
    public DateOnly? DocumentSendDate { get; set; }
    public string AcademicAchievementName { get; set; }
    public string AcademicFieldName { get; set; }
    public string PreciseAcademicFieldName { get; set; }
    public string NameOfIssuingCertificate { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public string GraduationYear { get; set; }
    public bool IsDuringRecruitment { get; set; }
    public bool IsdocumentVerify { get; set; }
    public string CountryName { get; set; }
    public string StudyTypeName { get; set; }
    public string Notes { get; set; }
}
