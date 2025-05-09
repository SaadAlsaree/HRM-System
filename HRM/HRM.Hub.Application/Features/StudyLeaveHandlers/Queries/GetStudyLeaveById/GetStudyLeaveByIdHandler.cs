namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveById;

public class GetStudyLeaveByIdHandler : IRequestHandler<GetStudyLeaveByIdQuery,
    Response<GetStudyLeaveByIdViewModel>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;

    public GetStudyLeaveByIdHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeave = repositoryStudyLeave ??
                                         throw new ArgumentNullException(nameof(repositoryStudyLeave));
    }

    public async Task<Response<GetStudyLeaveByIdViewModel>> Handle(GetStudyLeaveByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryStudyLeave
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetStudyLeaveByIdViewModel()
            {
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                Status = a.StatusId,
                
                Notes = a.Notes,
                Id = a.Id,
                AcceptanceYear = a.AcceptanceYear,
                CountryId = a.CountryId,
                CountryName = a.Country.Name,
                FinancialInsuranceDate = a.FinancialInsuranceDate,
                FinancialInsuranceNo = a.FinancialInsuranceNo,
                HireDate = a.HireDate,
                HireOrderDate = a.HireOrderDate,
                HireOrderNo = a.HireOrderNo,
                ReleaseDate = a.ReleaseDate,
                NameOfIssuingCertificate = a.NameOfIssuingCertificate,
                ReleaseOrderDate = a.ReleaseOrderDate,
                ReleaseOrderNo = a.ReleaseOrderNo,
                StudyPeriodTime = a.StudyPeriodTime,
                AcademicCertificateTypeName = a.AcademicCertificateType.Name,
                StudyFileId = a.StudyFileId,
                StudyFileDocumentNo = a.StudyFile.DocumentNo,
                StudyStatusId = a.StudyStatusId,
                StudyStatusName = a.StudyStatus.Name,
                AcademicFieldId = (int)a.AcademicFieldId,
                StudyResultId = a.StudyResultId,
                StudyResultName = a.StudyResult.Name,
                AcademicAchievementId = a.AcademicAchievementId,
                AcademicFieldName = a.AcademicField.Name,
                AcademicCertificateTypeId = (int)a.AcademicCertificateTypeId,
                AcademicAchievementName = a.AcademicAchievement.Name,
                LotNumber = a.Employee.LotNumber
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}