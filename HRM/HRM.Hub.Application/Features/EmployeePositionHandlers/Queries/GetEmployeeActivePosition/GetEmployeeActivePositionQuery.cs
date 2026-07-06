namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeeActivePosition;

public class GetEmployeeActivePositionQuery : IRequest<Response<GetEmployeeActivePositionViewModel>>
{
    public Guid EmployeeId { get; set; }
}
