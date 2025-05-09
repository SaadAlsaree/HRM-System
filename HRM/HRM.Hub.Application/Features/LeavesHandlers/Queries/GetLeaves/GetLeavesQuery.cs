namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.GetLeaves;
public sealed record GetLeavesQuery  : IRequest<Response<PagedResult<GetLeavesViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public DateOnly DateFrom { get; set; }
    public DateOnly DateTo { get; set; }
    public byte PageSize { get; set; }
    public int TypeOfLeaveId { get; set; }
    public Status Status { get; set; } = Status.None;
}