
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
        AcademicAchievementName = z.AcademicAchievement.Name,
        AcademicFieldName = z.AcademicField.Name,
        PreciseAcademicFieldName = z.PreciseAcademicField.Name,
        NameOfIssuingCertificate = z.NameOfIssuingCertificate,
        StartDate = z.StartDate,
        EndDate = z.EndDate,
        GraduationYear = z.GraduationYear,
        IsDuringRecruitment = z.IsDuringRecruitment,
        IsdocumentVerify = z.IsDocumentVerify,
        CountryName = z.Country.Name,
        StudyTypeName = z.StudyType.Name,
        Notes = z.Notes,
        Status = z.StatusId

    };
    public async Task<Response<GetEducationInfoByIdViewModel>> Handle(GetEducationInfoByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
