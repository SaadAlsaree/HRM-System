namespace HRM.Hub.Application.Features.MovementHandlers.Commands.ReverseMovement;

public class ReverseMovementCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
}
