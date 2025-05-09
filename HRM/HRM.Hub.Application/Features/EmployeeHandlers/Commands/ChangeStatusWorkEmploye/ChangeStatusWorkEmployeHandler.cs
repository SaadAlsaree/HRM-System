namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.ChangeStatusWorkEmploye;

public class ChangeStatusWorkEmployeHandler : IRequestHandler<ChangeStatusWorkEmployeCommend, Response<bool>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployees;
    public ChangeStatusWorkEmployeHandler(IBaseRepository<Employees> repositoryEmployees)
    {
        _repositoryEmployees = repositoryEmployees;
    }
    public async Task<Response<bool>> Handle(ChangeStatusWorkEmployeCommend request, CancellationToken cancellationToken)
    {
        var employee = await _repositoryEmployees.Find(x => x.Id == request.EmployeeId);
        if (employee == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);
        employee.StatusWorkingId = request.Status;
        _repositoryEmployees.Update(employee);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
