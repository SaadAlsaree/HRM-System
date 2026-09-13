namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformation;
public class GetEducationInfoHandler :
    GetAllWithCountHandler<EducationInformation, GetEducationInfoViewModel, GetEducationInfoQuery>,
    IRequestHandler<GetEducationInfoQuery, Response<PagedResult<GetEducationInfoViewModel>>>
{
    public GetEducationInfoHandler(IBaseRepository<EducationInformation> repositoryEducationInfo)
        : base(repositoryEducationInfo) { }

    public override Expression<Func<EducationInformation, GetEducationInfoViewModel>> Selector => z => new GetEducationInfoViewModel()
    { 
        Id = z.Id, 
        EmployeeId = z.EmployeeId,
        FullName = z.Employee != null ? z.Employee.FullName : null,
        OriginalDocument = z.OriginalDocument,
        DocumentNo = z.DocumentNo,
        DocumentDate = z.DocumentDate,
        DocumentSender = z.DocumentSender,
        DocumentSendDate = z.DocumentSendDate,
        AcademicAchievementName = z.AcademicAchievement != null ? z.AcademicAchievement.Name : null,
        AcademicFieldName = z.AcademicField != null ? z.AcademicField.Name : null,
        PreciseAcademicFieldName = z.PreciseAcademicField != null ? z.PreciseAcademicField.Name : null,
        NameOfIssuingCertificate = z.NameOfIssuingCertificate,
        StartDate = z.StartDate,
        EndDate = z.EndDate,
        GraduationYear = z.GraduationYear,
        IsDuringRecruitment = z.IsDuringRecruitment,
        IsDocumentVerify = z.IsDocumentVerify,
        IsInHiring = z.IsInHiring,
        IsCurrent = z.IsCurrent,
        CountryName = z.Country != null ? z.Country.Name : null,
        StudyTypeName = z.StudyType != null ? z.StudyType.Name : null,
        Status = z.StatusId, 
        Notes = z.Notes 
    };

    public override Func<IQueryable<EducationInformation>, IOrderedQueryable<EducationInformation>> OrderBy => order => order
        .OrderByDescending(z => z.IsCurrent)
        .ThenByDescending(z => z.CreateAt);

    public async Task<Response<PagedResult<GetEducationInfoViewModel>>> Handle(GetEducationInfoQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

