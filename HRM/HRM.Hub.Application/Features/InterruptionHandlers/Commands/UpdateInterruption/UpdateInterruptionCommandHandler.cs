using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.UpdateInterruption;
public class UpdateInterruptionCommandHandler : UpdateHandler<Interruption, UpdateInterruptionCommand>,
    IRequestHandler<UpdateInterruptionCommand, Response<bool>>
{
    public UpdateInterruptionCommandHandler(IBaseRepository<Interruption> interruptionRepository)
        : base(interruptionRepository)
    {
    }

    public override Expression<Func<Interruption, bool>> EntityPredicate(UpdateInterruptionCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateInterruptionCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}