namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalanceById;

public class GetLeavesBalanceByIdQuery : IRequest<Response<GetLeavesBalanceByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}