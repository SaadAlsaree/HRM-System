namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignmentsById;

public class GetAssignmentsByIdQuery : IRequest<Response<GetAssignmentsByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}