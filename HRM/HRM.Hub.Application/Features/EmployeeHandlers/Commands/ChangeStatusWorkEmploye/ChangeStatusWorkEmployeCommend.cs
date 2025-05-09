namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.ChangeStatusWorkEmploye;

public class ChangeStatusWorkEmployeCommend:IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public WorkingStatusEnum Status { get; set; }
}
