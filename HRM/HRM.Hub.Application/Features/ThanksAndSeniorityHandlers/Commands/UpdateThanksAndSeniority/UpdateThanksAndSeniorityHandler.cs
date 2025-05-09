using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.UpdateThanksAndSeniority;

public class UpdateThanksAndSeniorityHandler : UpdateHandler<ThanksAndSeniority, UpdateThanksAndSeniorityCommand>,
    IRequestHandler<UpdateThanksAndSeniorityCommand, Response<bool>>
{
    public UpdateThanksAndSeniorityHandler(IBaseRepository<ThanksAndSeniority> repositoryThanksAndSeniority)
        : base(repositoryThanksAndSeniority)
    {
    }

    public override Expression<Func<ThanksAndSeniority, bool>>
        EntityPredicate(UpdateThanksAndSeniorityCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateThanksAndSeniorityCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}