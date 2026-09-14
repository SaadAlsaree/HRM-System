using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.PromotionRules.Commands.UpdatePromotionRule;

public class UpdatePromotionRuleCommand : PromotionRuleFields, IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
}

public class UpdatePromotionRuleValidator : PromotionRuleFieldsValidator<UpdatePromotionRuleCommand>
{
}
