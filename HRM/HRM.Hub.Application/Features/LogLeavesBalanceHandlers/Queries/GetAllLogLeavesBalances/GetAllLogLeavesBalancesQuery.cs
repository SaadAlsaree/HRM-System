namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetAllLogLeavesBalances;
public class GetAllLogLeavesBalancesQuery : IRequest<Response<PagedResult<GetAllLogLeavesBalancesViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}