namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.GetEmployeeDisciplinaryById;
public class GetDisciplinaryByIdQuery : IRequest<Response<GetDisciplinaryByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}