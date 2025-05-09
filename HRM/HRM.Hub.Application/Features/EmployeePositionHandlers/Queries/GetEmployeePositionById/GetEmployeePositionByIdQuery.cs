namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeePositionById;
public class GetEmployeePositionByIdQuery : IRequest<Response<GetEmployeePositionByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}