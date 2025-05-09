namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalance;
public class GetLeavesBalanceQueryHandler : GetAllWithCountHandler<LeavesBalance, GetLeavesBalanceViewModel, GetLeavesBalanceQuery>,
    IRequestHandler<GetLeavesBalanceQuery, Response<PagedResult<GetLeavesBalanceViewModel>>>
{
    public GetLeavesBalanceQueryHandler(IBaseRepository<LeavesBalance> leavesBalanceRepository)
        : base(leavesBalanceRepository)
    {
    }

    public override Expression<Func<LeavesBalance, GetLeavesBalanceViewModel>> Selector =>
        x => new GetLeavesBalanceViewModel
        {
            Id = x.Id,
            EmployeeId = x.Employee.Id,
            FullName = x.Employee.FullName,
            JobCode = x.Employee.JobCode,
            Note = x.Note,
            Status = x.StatusId,
            LotNumber = x.Employee.LotNumber,
            Balance = x.Balance,
        };

    public override Func<IQueryable<LeavesBalance>, IOrderedQueryable<LeavesBalance>> OrderBy =>
        o => o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetLeavesBalanceViewModel>>> Handle(GetLeavesBalanceQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}