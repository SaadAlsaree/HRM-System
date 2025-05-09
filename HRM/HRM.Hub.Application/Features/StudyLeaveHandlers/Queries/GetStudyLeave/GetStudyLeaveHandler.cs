namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeave;

public class GetStudyLeaveHandler  : GetAllWithCountHandler<StudyLeave, StudyLeaveViewModel, GetStudyLeaveQuery>, IRequestHandler<GetStudyLeaveQuery, Response<PagedResult<StudyLeaveViewModel>>>
{
    public GetStudyLeaveHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
        : base(repositoryStudyLeave) { }

    public override Expression<Func<StudyLeave, StudyLeaveViewModel>> Selector => z => new StudyLeaveViewModel()
    {
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        Status = z.StatusId,
        Notes = z.Notes,
        Id = z.Id,
        AcceptanceYear = z.AcceptanceYear,
        CountryId = z.CountryId,
        CountryName = z.Country.Name,
        FinancialInsuranceDate = z.FinancialInsuranceDate,
        FinancialInsuranceNo = z.FinancialInsuranceNo,
        HireDate = z.HireDate,
        ReleaseDate = z.ReleaseDate,
        HireOrderNo = z.HireOrderNo,
        HireOrderDate = z.HireOrderDate,
        NameOfIssuingCertificate = z.NameOfIssuingCertificate,
        ReleaseOrderDate = z.ReleaseOrderDate,
        ReleaseOrderNo = z.ReleaseOrderNo,
        StudyPeriodTime = z.StudyPeriodTime,
        StudyFileId = z.StudyFileId,
        StudyFileDocumentNo = z.StudyFile.DocumentNo,
        StudyStatusId = z.StudyStatusId,
        StudyStatusName = z.StudyStatus.Name,
        AcademicFieldId = (int)z.AcademicFieldId,
        StudyResultId = z.StudyResultId,
        StudyResultName = z.StudyResult.Name,
        AcademicAchievementId = z.AcademicAchievementId,
        AcademicAchievementName = z.AcademicAchievement.Name,
        AcademicFieldName = z.AcademicField.Name,
        AcademicCertificateTypeId = (int)z.AcademicCertificateTypeId,
        AcademicCertificateTypeName = z.AcademicCertificateType.Name,
        LotNumber = z.Employee.LotNumber

    };

    public override Func<IQueryable<StudyLeave>, IOrderedQueryable<StudyLeave>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<StudyLeaveViewModel>>> Handle(GetStudyLeaveQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
