namespace HRM.Hub.Application.Features.Valuations.Queries.GetValuations;
public class GetValuationsQuery : IRequest<Response<PagedResult<GetValuationsViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; } = default;
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}
