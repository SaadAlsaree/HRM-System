
namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotion;
public class GetPromotionHandler  : GetAllWithCountHandler<Promotion, GetPromotionViewModel, GetPromotionQuery>, IRequestHandler<GetPromotionQuery, Response<PagedResult<GetPromotionViewModel>>>
{
    public GetPromotionHandler(IBaseRepository<Promotion> repositoryPromotion)
        : base(repositoryPromotion) { }

    public override Expression<Func<Promotion, GetPromotionViewModel>> Selector => z => new GetPromotionViewModel()
    {
        Id = z.Id,
        Note = z.Note,
        Status = z.StatusId,
        JobCategoryFromId = z.JobCategoryId,
        FullName = z.Employee.FullName,
        StatusName = z.StatusId.GetDisplayName(),
        EmployeeId = z.Employee.Id,
        DueDateDegree = z.DueDateDegree,
        DueDateCategory = z.DueDateCategory,
        ServiceRecycle = z.ServiceRecycle,
        SentPromotionGroupId = z.SentPromotionGroupId,
        SentPromotionGroupName = z.SentPromotionGroup.GroupName,
    };

    public override Func<IQueryable<Promotion>, IOrderedQueryable<Promotion>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetPromotionViewModel>>> Handle(GetPromotionQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
