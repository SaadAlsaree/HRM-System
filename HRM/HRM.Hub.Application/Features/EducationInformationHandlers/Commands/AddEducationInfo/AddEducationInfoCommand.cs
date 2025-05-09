using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.AddEducationInfo;
public class AddEducationInfoCommand : IRequest<Response<bool>>
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
    public string GraduationYear { get; set; }
    public bool IsDuringRecruitment { get; set; }
    public bool IsDocumentVerify { get; set; }
    public int CountryId { get; set; }
    public int StudyTypeId { get; set; }
    public string Notes { get; set; }
    public bool IsInHiring { get; set; }
}
