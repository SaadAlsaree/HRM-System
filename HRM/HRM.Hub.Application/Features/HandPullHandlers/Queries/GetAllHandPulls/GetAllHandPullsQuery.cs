namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetAllHandPulls;
public sealed record GetAllHandPullsQuery : IRequest<Response<PagedResult<GetAllHandPullsViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page {  get; set; }
    public byte PageSize {  get; set; }
    public Status Status { get; set; } = Status.None;
}