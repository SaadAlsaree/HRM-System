namespace HRM.Hub.Application.Features.PromotionRules.Queries.GetPromotionRules;

public class GetPromotionRulesQuery : IRequest<Response<PagedResult<GetPromotionRulesViewModel>>>, IPaginationQuery
{
    public PromotionRuleType RuleType { get; set; } = PromotionRuleType.Promotion;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
