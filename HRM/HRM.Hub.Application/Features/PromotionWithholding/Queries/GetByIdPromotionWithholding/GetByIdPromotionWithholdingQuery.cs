namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetByIdPromotionWithholding;

public class GetByIdPromotionWithholdingQuery: IRequest<Response<GetByIdPromotionWithholdingViewModel>>
{
    public Guid Id { get; set; }
}
