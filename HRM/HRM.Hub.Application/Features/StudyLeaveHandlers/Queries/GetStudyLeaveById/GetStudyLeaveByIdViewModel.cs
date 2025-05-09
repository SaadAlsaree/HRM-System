namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveById;

public class GetStudyLeaveByIdViewModel:BaseViewModel<Guid>
{
   
    public Guid? StudyFileId { get; set; }
    public string StudyFileDocumentNo { get; set; }
    public int? StudyStatusId { get; set; }
    public string StudyStatusName { get; set; }
    public int AcademicFieldId { get; set; }
    public string AcademicFieldName { get; set; }
    public int? StudyResultId { get; set; }
    public string StudyResultName { get; set; }
    public int? AcademicAchievementId { get; set; }
    public string AcademicAchievementName { get; set; }
    public int AcademicCertificateTypeId { get; set; }
    public string AcademicCertificateTypeName { get; set; }
    public int? StudyPeriodTime { get; set; }
    public string AcceptanceYear { get; set; }
    public string NameOfIssuingCertificate { get; set; }
    public string FinancialInsuranceNo { get; set; }
    public DateOnly? FinancialInsuranceDate { get; set; }
    public DateOnly? ReleaseOrderDate { get; set; }
    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }

    public string HireOrderNo { get; set; }

    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public int? CountryId { get; set; }
    public string CountryName { get; set; }
    public string Notes { get; set; }

}