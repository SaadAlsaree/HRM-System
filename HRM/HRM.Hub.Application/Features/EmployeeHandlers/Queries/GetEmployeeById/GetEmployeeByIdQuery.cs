namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployeeById;
public class GetEmployeeByIdQuery : IRequest<Response<GetEmployeeByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}