
namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetManagementInfoEmployeeProfile;
public class GetManagementInfoToEmployeeProfileHandler : IRequestHandler<
    GetManagementInfoToEmployeeProfileQuery,
    Response<GetManagementInfoToEmployeeProfileViewModel>>
{
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;

    public GetManagementInfoToEmployeeProfileHandler(
        IBaseRepository<ManagementInformation> repositoryManagementInformation)
    {
        _repositoryManagementInformation = repositoryManagementInformation ??
                                          throw new ArgumentNullException(nameof(repositoryManagementInformation));
    }

    public async Task<Response<GetManagementInfoToEmployeeProfileViewModel>> Handle(
        GetManagementInfoToEmployeeProfileQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryManagementInformation
            .Query(x =>
                x.Id == request.EmployeeId &&
                (x.IsInHiring || x.IsCurrent ||
                 (x.Employee != null && x.Employee.Promotion != null && x.Employee.Promotion.StopPromotion)))
            .Include(x => x.JobTitle)
            .Include(x => x.JobDescription)
            .Include(x => x.StopJobDegree)

            .Include(x => x.Directorate)
            .Include(x => x.SubDirectorate)
            .Include(x => x.Department)
            .Include(x => x.Position)

            .Include(x => x.Employee)
            .ThenInclude(x => x.Promotion)
            .ThenInclude(x => x.JobDegree)
            .Include(x => x.Employee)
            .ThenInclude(x => x.Promotion)
            .ThenInclude(x => x.JobCategory)

            .ToListAsync(cancellationToken: cancellationToken);

        GetManagementInfoToEmployeeProfileViewModel result;
        if (resp.Count == 0)
        {
            result = new GetManagementInfoToEmployeeProfileViewModel();
            return ErrorsMessage.NotFoundData.ToErrorMessage(result);
        }

        var currentManagementInfo = resp.FirstOrDefault(x => x.IsCurrent);
        var inHiringManagementInfo = resp.FirstOrDefault(x => x.IsInHiring);
        var stopPromotionManagementInfo = resp.FirstOrDefault(x => x.Employee?.Promotion?.StopPromotion == true);
        var mainManagementInfo = currentManagementInfo ?? inHiringManagementInfo ?? resp.First();

        result = new GetManagementInfoToEmployeeProfileViewModel
        {
            DegreeNameIsCurrent = currentManagementInfo?.Employee?.Promotion?.JobDegree?.Name,

            CategoryNameIsCurrent = currentManagementInfo?.Employee?.Promotion?.JobCategory?.Name,

            DegreeNameIsInHiring = inHiringManagementInfo?.Employee?.Promotion?.JobDegree?.Name,

            CategoryNameIsInHiring = inHiringManagementInfo?.Employee?.Promotion?.JobCategory?.Name,

            StopJobDegreeName = stopPromotionManagementInfo?.StopJobDegree?.Name,

            JobTitleName = currentManagementInfo?.JobTitle?.Name,

            JobDescriptionName = currentManagementInfo?.JobDescription?.Name,

            StopPromotion = currentManagementInfo?.Employee?.Promotion?.StopPromotion ??
                            stopPromotionManagementInfo?.Employee?.Promotion?.StopPromotion ?? false,

            DirectorateName = currentManagementInfo?.Directorate?.Name,

            SubDirectorateName = currentManagementInfo?.SubDirectorate?.Name,

            DepartmentName = currentManagementInfo?.Department?.Name,

            PositionName = currentManagementInfo?.Position?.Name,


            Id = mainManagementInfo.Id,

            EmployeeId = mainManagementInfo.Id,

            FullName = mainManagementInfo.Employee?.FullName,

            LotNumber = mainManagementInfo.Employee?.LotNumber,

            JobCode = mainManagementInfo.Employee?.JobCode,

            Status = mainManagementInfo.StatusId,

        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
