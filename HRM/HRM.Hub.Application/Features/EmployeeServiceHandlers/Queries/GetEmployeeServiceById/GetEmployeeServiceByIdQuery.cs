namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceById;
public class GetEmployeeServiceByIdQuery : IRequest<Response<GetEmployeeServiceByIdViewModel>>
{

    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}