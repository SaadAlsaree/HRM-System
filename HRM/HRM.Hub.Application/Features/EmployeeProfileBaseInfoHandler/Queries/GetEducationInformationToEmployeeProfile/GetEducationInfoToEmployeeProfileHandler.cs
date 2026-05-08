
using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformationById;
using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetAdministrativeOrderToEmployeeProfile;

namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEducationInformationToEmployeeProfile;
public class GetEducationInfoToEmployeeProfileHandler : IRequestHandler<
    GetEducationInfoToEmployeeProfileQuery,
    Response<GetEducationInfoToEmployeeProfileViewModel>>
{
    private readonly IBaseRepository<EducationInformation> _repositoryEducationInformation;

    public GetEducationInfoToEmployeeProfileHandler(
        IBaseRepository<EducationInformation> repositoryEducationInformation)
    {
        _repositoryEducationInformation = repositoryEducationInformation ??
                                          throw new ArgumentNullException(nameof(repositoryEducationInformation));
    }

    public async Task<Response<GetEducationInfoToEmployeeProfileViewModel>> Handle(
        GetEducationInfoToEmployeeProfileQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryEducationInformation
            .Query(x =>
                x.EmployeeId == request.EmployeeId && (x.IsInHiring || x.IsCurrent))
            .Include(x => x.AcademicField)
            .Include(x => x.AcademicAchievement)
            .Include(x => x.Employee)
            .ToListAsync(cancellationToken: cancellationToken);


        if (resp.Count == 0)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetEducationInfoToEmployeeProfileViewModel>(null);

        var currentEducationInfo = resp.FirstOrDefault(x => x.IsCurrent);
        var inHiringEducationInfo = resp.FirstOrDefault(x => x.IsInHiring);
        var mainEducationInfo = currentEducationInfo ?? inHiringEducationInfo ?? resp.First();

        var result = new GetEducationInfoToEmployeeProfileViewModel()
        {
            AcademicFieldIdIsCurrent = currentEducationInfo?.AcademicFieldId,
            AcademicFieldNameIsCurrent = currentEducationInfo?.AcademicField?.Name,
            
            AcademicAchievementIdIsCurrent = currentEducationInfo?.AcademicAchievementId,
            AcademicAchievementNameIsCurrent = currentEducationInfo?.AcademicAchievement?.Name,
            
            AcademicFieldIdIsInHiring = inHiringEducationInfo?.AcademicFieldId,
            AcademicFieldNameIsInHiring = inHiringEducationInfo?.AcademicField?.Name,
            
            AcademicAchievementIdIsInHiring = inHiringEducationInfo?.AcademicAchievementId,
            AcademicAchievementNameIsInHiring = inHiringEducationInfo?.AcademicAchievement?.Name,
            
            IsDocumentVerify = currentEducationInfo?.IsDocumentVerify,


            Id = mainEducationInfo.Id,
            EmployeeId = mainEducationInfo.EmployeeId,
            FullName = mainEducationInfo.Employee?.FullName,
            LotNumber = mainEducationInfo.Employee?.LotNumber,
            JobCode = mainEducationInfo.Employee?.JobCode,
            Status = mainEducationInfo.StatusId,

        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
