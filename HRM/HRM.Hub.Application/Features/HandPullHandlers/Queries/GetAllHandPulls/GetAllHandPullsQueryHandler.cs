namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetAllHandPulls;
public class GetAllHandPullsQueryHandler : GetAllWithCountHandler<HandPull, GetAllHandPullsViewModel, GetAllHandPullsQuery>,
    IRequestHandler<GetAllHandPullsQuery, Response<PagedResult<GetAllHandPullsViewModel>>>
{
    public GetAllHandPullsQueryHandler(IBaseRepository<HandPull> handPullRepository)
        : base(handPullRepository)
    {
    }

    public override Expression<Func<HandPull, GetAllHandPullsViewModel>> Selector => x => new GetAllHandPullsViewModel
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        RaiseHandPullOrderDate = x.RaiseHandPullOrderDate,
        RaiseHandPullOrderNo = x.RaiseHandPullOrderNo,
        WithdrawHandPullOrderDate = x.WithdrawHandPullOrderDate,
        WithdrawHandPullOrderNo = x.WithdrawHandPullOrderNo,
        Note = x.Note,
        Status = x.StatusId,
        CreateAt = x.CreateAt,
        CreateBy = x.CreateBy,
        LastUpdateAt = x.LastUpdateAt,
        LastUpdateBy = x.LastUpdateBy,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
    };

    public override Func<IQueryable<HandPull>, IOrderedQueryable<HandPull>> OrderBy => o => o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllHandPullsViewModel>>> Handle(GetAllHandPullsQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}