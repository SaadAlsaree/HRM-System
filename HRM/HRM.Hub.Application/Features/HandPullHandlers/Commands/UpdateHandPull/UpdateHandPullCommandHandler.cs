using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.HandPullHandlers.Commands.UpdateHandPull;
public class UpdateHandPullCommandHandler : UpdateHandler<HandPull, UpdateHandPullCommand>,
    IRequestHandler<UpdateHandPullCommand, Response<bool>>
{
    public UpdateHandPullCommandHandler(IBaseRepository<HandPull> handPullRepository)
        : base(handPullRepository)
    {
    }

    public override Expression<Func<HandPull, bool>> EntityPredicate(UpdateHandPullCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateHandPullCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}