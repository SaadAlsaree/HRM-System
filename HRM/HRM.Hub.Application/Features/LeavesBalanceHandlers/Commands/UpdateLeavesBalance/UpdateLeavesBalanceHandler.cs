namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.UpdateLeavesBalance;
public class UpdateLeavesBalanceHandler : UpdateHandler<Leaves, UpdateLeavesBalanceCommand>, IRequestHandler<UpdateLeavesBalanceCommand, Response<bool>>
{
    public UpdateLeavesBalanceHandler(IBaseRepository<Leaves> leavesRepository)
        : base(leavesRepository)
    {
    }

    public override Expression<Func<Leaves, bool>> EntityPredicate(UpdateLeavesBalanceCommand request)
        => x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateLeavesBalanceCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}