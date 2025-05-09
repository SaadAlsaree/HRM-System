namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetLogLeavesBalanceById;
public class GetLogLeavesBalanceByIdQueryHandler : GetByIdHandler<LogLeavesBalance, GetLogLeavesBalanceByIdViewModel, GetLogLeavesBalanceByIdQuery>, IRequestHandler<GetLogLeavesBalanceByIdQuery, Response<GetLogLeavesBalanceByIdViewModel>>
{
    public GetLogLeavesBalanceByIdQueryHandler(IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository)
        : base(logLeavesBalanceRepository)
    {
    }

    public override Expression<Func<LogLeavesBalance, GetLogLeavesBalanceByIdViewModel>> Selector => x => new GetLogLeavesBalanceByIdViewModel
    {
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        BookNo = x.BookNo,
        BookDate = x.BookDate,
        NameOfIssuing = x.NameOfIssuing,
        CountOfDay = x.CountOfDay,
        Note = x.Note,
        Status = x.StatusId,
        Id = x.Id,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
    };

    public override Expression<Func<LogLeavesBalance, bool>>
        IdPredicate(GetLogLeavesBalanceByIdQuery request) => x => x.Id == request.Id;

    public async Task<Response<GetLogLeavesBalanceByIdViewModel>>
        Handle(GetLogLeavesBalanceByIdQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}