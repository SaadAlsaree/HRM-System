namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignments;

public class GetAssignmentsQuery :  IRequest<Response<PagedResult<GetAssignmentsViewModel>>>,IPaginationQuery
{
    public AssignmentTypes AssignmentSite { get; set; }
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}
