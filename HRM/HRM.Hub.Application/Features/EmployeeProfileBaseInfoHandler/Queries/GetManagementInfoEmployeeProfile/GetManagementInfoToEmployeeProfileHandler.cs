
namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetManagementInfoEmployeeProfile;

public class GetManagementInfoToEmployeeProfileHandler : IRequestHandler<
    GetManagementInfoToEmployeeProfileQuery,
    Response<GetManagementInfoToEmployeeProfileViewModel>>
{
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;
    private readonly IBaseRepository<Employees> _repositoryEmployee;

    public GetManagementInfoToEmployeeProfileHandler(
        IBaseRepository<ManagementInformation> repositoryManagementInformation,
        IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryManagementInformation = repositoryManagementInformation ??
                                          throw new ArgumentNullException(nameof(repositoryManagementInformation));
        _repositoryEmployee = repositoryEmployee ??
                              throw new ArgumentNullException(nameof(repositoryEmployee));
    }

    public async Task<Response<GetManagementInfoToEmployeeProfileViewModel>> Handle(
        GetManagementInfoToEmployeeProfileQuery request,
        CancellationToken cancellationToken)
    {
        var managementInfo = await _repositoryManagementInformation
            .Query(x => x.Id == request.EmployeeId)
            .Include(x => x.EmploymentDegree)
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
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.Section)
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.Unit)
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.Position)
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.Directorate)
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.SubDirectorate)
            .Include(x => x.Employee)
                .ThenInclude(x => x.EmployeePositions)
                    .ThenInclude(p => p.Department)
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        Employees? employee = null;
        if (managementInfo == null)
        {
            employee = await _repositoryEmployee
                .Query(x => x.Id == request.EmployeeId)
                .Include(x => x.Promotion)
                    .ThenInclude(x => x.JobDegree)
                .Include(x => x.Promotion)
                    .ThenInclude(x => x.JobCategory)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.Section)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.Unit)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.Position)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.Directorate)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.SubDirectorate)
                .Include(x => x.EmployeePositions)
                    .ThenInclude(p => p.Department)
                .FirstOrDefaultAsync(cancellationToken: cancellationToken);

            if (employee == null)
            {
                return ErrorsMessage.NotFoundData.ToErrorMessage(new GetManagementInfoToEmployeeProfileViewModel());
            }
        }

        var employeeEntity = managementInfo?.Employee ?? employee;
        var activePosition = employeeEntity?.EmployeePositions?.FirstOrDefault(p => p.Status == Status.Active && !p.IsDeleted)
                             ?? employeeEntity?.EmployeePositions?.LastOrDefault();

        var result = new GetManagementInfoToEmployeeProfileViewModel
        {
            DegreeNameIsCurrent = employeeEntity?.Promotion?.JobDegree?.Name ?? managementInfo?.EmploymentDegree?.Name,
            CategoryNameIsCurrent = employeeEntity?.Promotion?.JobCategory?.Name,
            DegreeNameIsInHiring = managementInfo?.EmploymentDegree?.Name ?? employeeEntity?.Promotion?.JobDegree?.Name,
            CategoryNameIsInHiring = employeeEntity?.Promotion?.JobCategory?.Name,
            StopJobDegreeName = managementInfo?.StopJobDegree?.Name,
            JobTitleName = managementInfo?.JobTitle?.Name,
            JobDescriptionName = managementInfo?.JobDescription?.Name,
            StopPromotion = employeeEntity?.Promotion?.StopPromotion ?? false,
            DueDateDegree = employeeEntity?.Promotion?.DueDateDegree,
            DueDateCategory = employeeEntity?.Promotion?.DueDateCategory,
            LastAllowanceDate = employeeEntity?.Promotion?.LastAllowanceDate,
            DirectorateName = managementInfo?.Directorate?.Name ?? activePosition?.Directorate?.Name,
            SubDirectorateName = managementInfo?.SubDirectorate?.Name ?? activePosition?.SubDirectorate?.Name,
            DepartmentName = managementInfo?.Department?.Name ?? activePosition?.Department?.Name,
            SectionName = activePosition?.Section?.Name,
            UnitName = activePosition?.Unit?.Name,
            PositionName = managementInfo?.Position?.Name ?? activePosition?.Position?.Name,
            Id = request.EmployeeId,
            EmployeeId = request.EmployeeId,
            FullName = employeeEntity?.FullName,
            LotNumber = employeeEntity?.LotNumber,
            JobCode = employeeEntity?.JobCode,
            Status = managementInfo?.StatusId ?? employeeEntity?.StatusId ?? Status.Active,
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
