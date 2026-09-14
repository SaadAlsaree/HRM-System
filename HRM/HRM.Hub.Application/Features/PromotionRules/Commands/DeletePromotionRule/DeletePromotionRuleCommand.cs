namespace HRM.Hub.Application.Features.PromotionRules.Commands.DeletePromotionRule;

public class DeletePromotionRuleCommand : IRequest<Response<bool>>
{
    public int Id { get; set; }
    public PromotionRuleType RuleType { get; set; }
}
