namespace HRM.Hub.Application.Features.PromotionRules.Commands.CreatePromotionRule;

public class CreatePromotionRuleCommand : PromotionRuleFields, IRequest<Response<bool>>
{
}

public class CreatePromotionRuleValidator : PromotionRuleFieldsValidator<CreatePromotionRuleCommand>
{
}
