namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetInterruptionById;
public sealed record GetInterruptionByIdQuery : IRequest<Response<GetInterruptionByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}