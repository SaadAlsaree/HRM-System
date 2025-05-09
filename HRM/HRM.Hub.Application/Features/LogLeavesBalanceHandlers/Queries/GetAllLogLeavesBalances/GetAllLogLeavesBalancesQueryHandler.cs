namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetAllLogLeavesBalances;
public class GetAllLogLeavesBalancesQueryHandler : GetAllWithCountHandler<LogLeavesBalance, GetAllLogLeavesBalancesViewModel, GetAllLogLeavesBalancesQuery>,
    IRequestHandler<GetAllLogLeavesBalancesQuery, Response<PagedResult<GetAllLogLeavesBalancesViewModel>>>
{
    public GetAllLogLeavesBalancesQueryHandler(IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository)
        : base(logLeavesBalanceRepository)
    {
    }

    public override Expression<Func<LogLeavesBalance, GetAllLogLeavesBalancesViewModel>> Selector => x => new GetAllLogLeavesBalancesViewModel
    {
        Id = x.Id,
        LotNumber = x.Employee.LotNumber,
        EmployeeId = x.EmployeeId,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        BookNo = x.BookNo,
        BookDate = x.BookDate,
        NameOfIssuing = x.NameOfIssuing,
        CountOfDay = x.CountOfDay,
        Note = x.Note,
        Status = x.StatusId,
    };

    public override Func<IQueryable<LogLeavesBalance>, IOrderedQueryable<LogLeavesBalance>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllLogLeavesBalancesViewModel>>> Handle(GetAllLogLeavesBalancesQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}