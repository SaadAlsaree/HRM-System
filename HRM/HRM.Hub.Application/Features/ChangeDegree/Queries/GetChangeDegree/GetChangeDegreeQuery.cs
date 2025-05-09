namespace HRM.Hub.Application.Features.ChangeDegree.Queries.GetChangeDegree;
public class GetChangeDegreeQuery : IRequest<Response<PagedResult<GetChangeDegreeViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}