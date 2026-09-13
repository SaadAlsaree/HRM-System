using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformation;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEmployeeEducationInformation;

public class GetEmployeeEducationInformationHandler:
GetAllWithCountHandler<EducationInformation, GetEmployeeEducationInformationViewModel, GetEmployeeEducationInformationQuery>,
    IRequestHandler<GetEmployeeEducationInformationQuery, Response<PagedResult<GetEmployeeEducationInformationViewModel>>>
{
public GetEmployeeEducationInformationHandler(IBaseRepository<EducationInformation> repositoryEducationInfo)
    : base(repositoryEducationInfo) { }

public override Expression<Func<EducationInformation, GetEmployeeEducationInformationViewModel>> Selector => z => new GetEmployeeEducationInformationViewModel()
{
    Id = z.Id,
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
    IsdocumentVerify = z.IsDocumentVerify,
    CountryName = z.Country != null ? z.Country.Name : null,
    StudyTypeName = z.StudyType != null ? z.StudyType.Name : null,
    Status = z.StatusId,
    Notes = z.Notes
};

public override Func<IQueryable<EducationInformation>, IOrderedQueryable<EducationInformation>> OrderBy => order => order.OrderBy(z => z.Id);

public async Task<Response<PagedResult<GetEmployeeEducationInformationViewModel>>> Handle(GetEmployeeEducationInformationQuery request, CancellationToken cancellationToken)
{
    return await HandleBase(request, cancellationToken);
}
}