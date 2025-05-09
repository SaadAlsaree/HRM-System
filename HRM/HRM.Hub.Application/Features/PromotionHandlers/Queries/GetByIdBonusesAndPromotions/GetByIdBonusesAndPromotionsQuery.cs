namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetByIdBonusesAndPromotions;
public class GetByIdBonusesAndPromotionsQuery : IRequest<Response<GetByIdBonusesAndPromotionsViewModel>>
{
    public int TypeOfPromotions { get; set; }
}