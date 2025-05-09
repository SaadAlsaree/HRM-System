namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotions
{
    public class GetStatsPromotionsQuery : IRequest<Response<IEnumerable<GetStatsPromotionsViewModel>>>
    {
        public int Take { get; set; } = 10;
        public int Skip { get; set; } = 0;
        public Status Status { get; set; }
    }
}
