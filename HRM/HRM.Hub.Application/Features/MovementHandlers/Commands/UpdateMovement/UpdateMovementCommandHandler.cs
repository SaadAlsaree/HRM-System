namespace HRM.Hub.Application.Features.MovementHandlers.Commands.UpdateMovement;
public class UpdateMovementCommandHandler : UpdateHandler<Movements, UpdateMovementCommand>, IRequestHandler<UpdateMovementCommand, Response<bool>>
{
    public UpdateMovementCommandHandler(IBaseRepository<Movements> movementsRepository)
        : base(movementsRepository) {}

    public override Expression<Func<Movements, bool>> EntityPredicate(UpdateMovementCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateMovementCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}