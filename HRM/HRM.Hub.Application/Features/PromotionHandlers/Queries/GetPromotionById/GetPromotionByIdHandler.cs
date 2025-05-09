namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionById;

public class GetPromotionByIdHandler : IRequestHandler<GetPromotionByIdQuery,
    Response<GetPromotionByIdViewModel>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;

    public GetPromotionByIdHandler(IBaseRepository<Promotion> repositoryPromotion)
    {
        _repositoryPromotion = repositoryPromotion ??
                                         throw new ArgumentNullException(nameof(repositoryPromotion));
    }

    public async Task<Response<GetPromotionByIdViewModel>> Handle(GetPromotionByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryPromotion
            .Query(x =>
                x.Id == request.Id)
            .Select(z => new GetPromotionByIdViewModel()
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

            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}