namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalance;
public class GetLeavesBalanceQuery : IRequest<Response<PagedResult<GetLeavesBalanceViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}