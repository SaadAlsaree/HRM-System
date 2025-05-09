namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetMovementById;
public sealed record GetMovementByIdQuery : IRequest<Response<GetMovementByIdViewModel>>
{
    public Guid MovementId { get; set; }
    public Status Status { get; set; } = Status.None;

}