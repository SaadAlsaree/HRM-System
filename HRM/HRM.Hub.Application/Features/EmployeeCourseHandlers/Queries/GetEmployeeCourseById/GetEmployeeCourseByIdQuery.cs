namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.GetEmployeeCourseById;
public sealed record GetEmployeeCourseByIdQuery : IRequest<Response<GetEmployeeCourseByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}