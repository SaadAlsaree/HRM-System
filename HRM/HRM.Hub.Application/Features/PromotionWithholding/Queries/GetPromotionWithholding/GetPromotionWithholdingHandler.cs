namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetPromotionWithholding;

public class GetPromotionWithholdingHandler : GetAllWithCountHandler<LogPromotionWithholding, GetPromotionWithholdingViewModel, GetPromotionWithholdingQuery>,
IRequestHandler<GetPromotionWithholdingQuery, Response<PagedResult<GetPromotionWithholdingViewModel>>>
{
    public GetPromotionWithholdingHandler(IBaseRepository<LogPromotionWithholding> repository) : base(repository)
    {
    }

    public override Expression<Func<LogPromotionWithholding, GetPromotionWithholdingViewModel>> Selector => x => new GetPromotionWithholdingViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
        Status = x.StatusId,
        StatusName = x.StatusId.GetDisplayName(),
        ScheduledPromotionDate = x.ScheduledPromotionDate,
        WithholdingDate = x.WithholdingDate,
        ReasonForWithholding = x.ReasonForWithholding,
        Notes = x.Notes
    };

    public override Func<IQueryable<LogPromotionWithholding>, IOrderedQueryable<LogPromotionWithholding>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetPromotionWithholdingViewModel>>> Handle(GetPromotionWithholdingQuery request, CancellationToken cancellationToken) =>
    await HandleBase(request, cancellationToken);
}
