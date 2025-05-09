using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.UpdateStudyLeave;

public class UpdateStudyLeaveCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid StudyLeaveId { get; set; }

    public Guid? StudyFileId { get; set; }

    public int? AcademicCertificateTypeId { get; set; }

    public int? AcademicAchievementId { get; set; }

    public int? AcademicFieldId { get; set; }

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

    public int? StudyStatusId { get; set; }

    public int? StudyResultId { get; set; }

    public string Notes { get; set; }

}