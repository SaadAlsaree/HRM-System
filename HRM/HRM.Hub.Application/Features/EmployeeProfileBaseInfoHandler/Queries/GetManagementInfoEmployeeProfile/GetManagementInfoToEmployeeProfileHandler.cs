
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
                x.Id == request.EmployeeId && x.IsInHiring || x.IsCurrent || x.Employee.Promotion.StopPromotion)
            .Include(x => x.JobTitle)
            .Include(x => x.JobDescription)
            .Include(x => x.StopJobDegree)

            .Include(x => x.Directorate)
            .Include(x => x.SubDirectorate)
            .Include(x => x.Department)
            .Include(x => x.Position)

            .Include(x => x.Employee)

            .ToListAsync(cancellationToken: cancellationToken);

        GetManagementInfoToEmployeeProfileViewModel result;
        if (resp.Count == 0)
        {
            result = new GetManagementInfoToEmployeeProfileViewModel();
            return ErrorsMessage.NotFoundData.ToErrorMessage(result);
        }
        result = new GetManagementInfoToEmployeeProfileViewModel
        {
            DegreeNameIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.Employee.Promotion.JobDegree.Name,

            CategoryNameIsCurrent = resp.FirstOrDefault(x => x.IsCurrent)?.Employee.Promotion.JobCategory.Name,

            DegreeNameIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.Employee.Promotion.JobDegree.Name,

            CategoryNameIsInHiring = resp.FirstOrDefault(x => x.IsInHiring)?.Employee.Promotion.JobCategory.Name,

            StopJobDegreeName = resp.FirstOrDefault(x => x.Employee.Promotion.StopPromotion)?.StopJobDegree.Name,

            JobTitleName = resp.FirstOrDefault(x => x.IsCurrent)?.JobTitle.Name,

            JobDescriptionName = resp.FirstOrDefault(x => x.IsCurrent)?.JobDescription.Name,

            StopPromotion = resp.FirstOrDefault(x => x.IsCurrent).Employee.Promotion.StopPromotion,

            DirectorateName = resp.FirstOrDefault(x => x.IsCurrent)?.Directorate.Name,

            SubDirectorateName = resp.FirstOrDefault(x => x.IsCurrent)?.SubDirectorate.Name,

            DepartmentName = resp.FirstOrDefault(x => x.IsCurrent)?.Department.Name,

            PositionName = resp.FirstOrDefault(x => x.IsCurrent)?.Position.Name,


            Id = resp.FirstOrDefault()!.Id,

            EmployeeId = resp.FirstOrDefault()!.Id,

            FullName = resp.FirstOrDefault()!.Employee.FullName,

            LotNumber = resp.FirstOrDefault()!.Employee.LotNumber,

            JobCode = resp.FirstOrDefault()!.Employee.JobCode,

            Status = resp.FirstOrDefault()!.StatusId,

        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}