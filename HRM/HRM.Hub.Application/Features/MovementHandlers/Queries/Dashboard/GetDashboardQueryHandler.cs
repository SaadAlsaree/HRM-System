namespace HRM.Hub.Application.Features.MovementHandlers.Queries.Dashboard;
public class GetDashboardQueryHandler : IRequestHandler<GetDashboardQuery, Response<GetDashboardViewModel>>
{
    private readonly IBaseRepository<Employees> _employeesRepository;
    private readonly IBaseRepository<Domain.Entities.Assignments> _assignmentsRepository;
    public GetDashboardQueryHandler(IBaseRepository<Employees> employeesRepository, IBaseRepository<Domain.Entities.Assignments> assignmentsRepository)
    {
        _employeesRepository = employeesRepository ?? throw new ArgumentNullException(nameof(employeesRepository));
        _assignmentsRepository = assignmentsRepository ?? throw new ArgumentNullException(nameof(assignmentsRepository));
    }

    public async Task<Response<GetDashboardViewModel>> Handle(GetDashboardQuery request, CancellationToken cancellationToken)
    {
        var employees = _employeesRepository.Query();
        var assignments = _assignmentsRepository.Query();

        var (data, count) = await _assignmentsRepository.GetAsync(filter: x => x.StatusId == Status.Active, selector: x => new
        {
            x.EmployeeId,
            x.Employee.FullName,
            x.AssignedFromOrganization,
            x.AssignedToOrganization,
            x.OrderDate,
            x.EndOrderDate,
            x.DurationOfAssignment
        }, include: inc => inc.Include(x => x.Employee),
        orderBy: o => o.OrderBy(x => x.CreateBy),
        take: request.Take,
        skip: request.Skip,
        cancellationToken: cancellationToken);

        if (!data.Any())
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetDashboardViewModel>(null);

        return SuccessMessage.Get.ToSuccessMessage(new GetDashboardViewModel
        {
            Data = data,
            // TotalEmployees = await employees.CountAsync(cancellationToken),
            // TotalAssigned = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Delegation, cancellationToken),
            // TotalAssignedFrom = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Delegation && x.TypeOfAssignment == (int)AssignmentTypes.AssignmentIn, cancellationToken),
            // TotalAssignedTo = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Delegation && x.TypeOfAssignment == (int)AssignmentTypes.AssignmentIn, cancellationToken),
            // TotalAppointedEmployees = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Assignment, cancellationToken),
            // TotalRepresentatives = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Representation, cancellationToken),
            // TotalVacantPositions = await assignments.CountAsync(x => x.TypeOfAssignment == (int)AssignedTypes.Vacant, cancellationToken)
        });
    }
}