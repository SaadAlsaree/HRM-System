namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.UpdateLogLeavesBalance;
public class UpdateLogLeavesBalanceCommandHandler : UpdateHandler<LogLeavesBalance, UpdateLogLeavesBalanceCommand>, IRequestHandler<UpdateLogLeavesBalanceCommand, Response<bool>>
{
    private readonly IBaseRepository<LeavesBalance> _repositoryLeavesBalance;
    public UpdateLogLeavesBalanceCommandHandler(IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository, IBaseRepository<LeavesBalance> repositoryLeavesBalance)
        : base(logLeavesBalanceRepository)
    {
        _repositoryLeavesBalance = repositoryLeavesBalance;
    }

    public override Expression<Func<LogLeavesBalance, bool>> EntityPredicate(UpdateLogLeavesBalanceCommand request) => 
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateLogLeavesBalanceCommand request, CancellationToken cancellationToken)
    {
        var leavesBalance = await _repositoryLeavesBalance.Find(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (leavesBalance == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);
        var logLeavesBalance = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (logLeavesBalance == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);
        leavesBalance.Balance -= logLeavesBalance.CountOfDay;
        leavesBalance.Balance += request.CountOfDay;
        _repositoryLeavesBalance.Update(leavesBalance);
        return await HandleBase(request, cancellationToken);
    }
}