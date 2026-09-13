
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformationById;
public class GetEducationInfoByIdHandler : GetByIdHandler<EducationInformation, GetEducationInfoByIdViewModel, GetEducationInfoByIdQuery>, IRequestHandler<GetEducationInfoByIdQuery, Response<GetEducationInfoByIdViewModel>>
{
    public GetEducationInfoByIdHandler(IBaseRepository<EducationInformation> repositoryEmployeeEducationInfo)
        : base(repositoryEmployeeEducationInfo) { }

    public override Expression<Func<EducationInformation, bool>> IdPredicate(GetEducationInfoByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EducationInformation, GetEducationInfoByIdViewModel>> Selector => z => new GetEducationInfoByIdViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
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
        Notes = z.Notes,
        Status = z.StatusId
    };
    public async Task<Response<GetEducationInfoByIdViewModel>> Handle(GetEducationInfoByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
