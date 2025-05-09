namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetLogLeavesBalanceById;
public class GetLogLeavesBalanceByIdQuery : IRequest<Response<GetLogLeavesBalanceByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}