
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
                x.EmployeeId == request.EmployeeId && x.IsInHiring || x.IsCurrent)
            .Include(x => x.AcademicField)
            .Include(x => x.AcademicAchievement)
            .Include(x => x.Employee)
            .ToListAsync(cancellationToken: cancellationToken);


        if (resp.Count == 0)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetEducationInfoToEmployeeProfileViewModel>(null);

        var result = new GetEducationInfoToEmployeeProfileViewModel()
        {
            AcademicFieldIdIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.AcademicFieldId,
            AcademicFieldNameIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.AcademicField.Name,
            
            AcademicAchievementIdIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.AcademicAchievementId,
            AcademicAchievementNameIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.AcademicAchievement.Name,
            
            AcademicFieldIdIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.AcademicFieldId,
            AcademicFieldNameIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.AcademicField.Name,
            
            AcademicAchievementIdIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.AcademicAchievementId,
            AcademicAchievementNameIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.AcademicAchievement.Name,
            
            IsDocumentVerify = resp.FirstOrDefault(x => x.IsCurrent)?.IsDocumentVerify,


            Id = resp.FirstOrDefault()!.Id,
            EmployeeId = resp.FirstOrDefault()!.EmployeeId,
            FullName = resp.FirstOrDefault()!.Employee.FullName,
            LotNumber = resp.FirstOrDefault()!.Employee.LotNumber,
            JobCode = resp.FirstOrDefault()!.Employee.JobCode,
            Status = resp.FirstOrDefault()!.StatusId,

        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}