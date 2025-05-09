namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.CreateLogLeavesBalance;
public class CreateLogLeavesBalanceCommandHandler : CreateHandler<LogLeavesBalance, CreateLogLeavesBalanceCommand>, IRequestHandler<CreateLogLeavesBalanceCommand, Response<bool>>
{
    private readonly IBaseRepository<LeavesBalance> _repositoryLeavesBalance;
    public CreateLogLeavesBalanceCommandHandler(IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository, IBaseRepository<LeavesBalance> repositoryLeavesBalance)
        : base(logLeavesBalanceRepository)
    {
        _repositoryLeavesBalance = repositoryLeavesBalance;
    }

    protected override Expression<Func<LogLeavesBalance, bool>> ExistencePredicate(CreateLogLeavesBalanceCommand request) => x => false;

    protected override LogLeavesBalance MapToEntity(CreateLogLeavesBalanceCommand request)
    {
        return new LogLeavesBalance
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            BookNo = request.BookNo,
            BookDate = request.BookDate,
            Note = request.Note,
            CountOfDay = request.CountOfDay,
            NameOfIssuing = request.NameOfIssuing,
            CreateAt = DateTime.Now,
            CreateBy = request.CreateBy,
        };
    }

    public async Task<Response<bool>> Handle(CreateLogLeavesBalanceCommand request, CancellationToken cancellationToken)
    {
        var leavesBalance = await _repositoryLeavesBalance.Find(x => x.Id == request.EmployeeId);
        if (leavesBalance == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        leavesBalance.Balance += request.CountOfDay;
        _repositoryLeavesBalance.Update(leavesBalance);
        return await HandleBase(request, cancellationToken);
    }
}