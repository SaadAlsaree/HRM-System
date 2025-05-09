
namespace HRM.Hub.Application.Features.Dashboard.Queries.GetEmployeeDemographics;
public class GetEmployeeDemographicsQuery:IRequest<Response<GetEmployeeDemographicsViewModel>>
{
}
public class GetEmployeeDemographicsHandler : IRequestHandler<GetEmployeeDemographicsQuery, Response<GetEmployeeDemographicsViewModel>>
{
    private readonly IBaseRepository<AppSetting> _repositoryAppSetting;
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly IBaseRepository<Domain.Entities.Assignments> _repositoryAssignment;


    public GetEmployeeDemographicsHandler(IBaseRepository<AppSetting> repositoryAppSetting, IBaseRepository<Employees> repositoryEmployee, IBaseRepository<Domain.Entities.Assignments> repositoryAssignment)
    {
        _repositoryAppSetting = repositoryAppSetting;
        _repositoryEmployee = repositoryEmployee;
        _repositoryAssignment = repositoryAssignment;
    }
    public async Task<Response<GetEmployeeDemographicsViewModel>> Handle(GetEmployeeDemographicsQuery request, CancellationToken cancellationToken)
    {
        // Create new instance of GetEmployeeDemographicsViewModel
        var getEmployeeDemographics = new GetEmployeeDemographicsViewModel();
        // Get all employees with join to Jobinformation  and have TypeOfJob = 1
        var getPermanentEmployee = await _repositoryEmployee.Query()
            .CountAsync(x => x.JobInformation.TypeOfJobId == 1 && x.StatusWorkingId == WorkingStatusEnum.Active, cancellationToken: cancellationToken);
        // Get all assignments with Join to Employee and have StatusWork = 1 and group by AssignmentType and get count for each group
        var getAssignmentsEmployee =await _repositoryAssignment.Query().Where(x => x.Employee.StatusWorkingId == WorkingStatusEnum.Active)
            .GroupBy(x => x.AssignmentSite).Select(x => new { AssignmentSite = x.Key, Count = x.Count() }).ToListAsync();

        var getAppSetting = await _repositoryAppSetting.Query().FirstOrDefaultAsync(cancellationToken: cancellationToken);
        // add check if getAppSetting is null set CountOfDegreeJob = 0
        if (getAppSetting == null)
        {
            getAppSetting = new AppSetting();
            getAppSetting.CountOfDegreeJob = 0;
        }
        return SuccessMessage.Get.ToSuccessMessage(new GetEmployeeDemographicsViewModel()
        {
            CountAssignmentsEmployee = getAssignmentsEmployee.Sum(x => x.Count),
            CountAssignmentsInEmployee = getAssignmentsEmployee.Where(x => x.AssignmentSite == AssignmentTypes.AssignmentIn).Sum(x => x.Count),
            CountAssignmentsOutEmployee = getAssignmentsEmployee.Where(x => x.AssignmentSite == AssignmentTypes.AssignmentOut).Sum(x => x.Count),
            CountPermanentEmployee = getPermanentEmployee,
            CountVacantPositions = getAppSetting.CountOfDegreeJob - getPermanentEmployee,
            CountOfDegreeJob = getAppSetting.CountOfDegreeJob
        });
    }
}
