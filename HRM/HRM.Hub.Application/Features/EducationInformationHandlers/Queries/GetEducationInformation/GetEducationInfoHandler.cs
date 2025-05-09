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
        FullName = z.Employee.FullName,
        OriginalDocument = z.OriginalDocument,
        DocumentNo = z.DocumentNo,
        DocumentDate = z.DocumentDate,
        DocumentSender = z.DocumentSender,
        DocumentSendDate = z.DocumentSendDate,
        AcademicAchievementName = z.AcademicAchievement.Name,
        AcademicFieldName = z.AcademicField.Name,
        PreciseAcademicFieldName = z.PreciseAcademicField.Name,
        NameOfIssuingCertificate = z.NameOfIssuingCertificate,
        StartDate = z.StartDate,
        EndDate = z.EndDate,
        GraduationYear = z.GraduationYear,
        IsDuringRecruitment = z.IsDuringRecruitment,
        IsDocumentVerify = z.IsDocumentVerify,
        CountryName = z.Country.Name,
        StudyTypeName = z.StudyType.Name,
        Status = z.StatusId, 
        Notes = z.Notes 
    };

    public override Func<IQueryable<EducationInformation>, IOrderedQueryable<EducationInformation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetEducationInfoViewModel>>> Handle(GetEducationInfoQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

