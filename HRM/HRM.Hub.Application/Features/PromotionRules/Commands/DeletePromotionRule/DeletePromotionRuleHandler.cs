namespace HRM.Hub.Application.Features.PromotionRules.Commands.DeletePromotionRule;

// Soft delete: the rule tables have an IsDeleted query filter, so deleted rules no longer reach the calculation.
public class DeletePromotionRuleHandler : IRequestHandler<DeletePromotionRuleCommand, Response<bool>>
{
    private readonly IBaseRepository<PromotionAllowanceRule> _promotionRules;
    private readonly IBaseRepository<AnnualAllowanceRule> _allowanceRules;

    public DeletePromotionRuleHandler(
        IBaseRepository<PromotionAllowanceRule> promotionRules,
        IBaseRepository<AnnualAllowanceRule> allowanceRules)
    {
        _promotionRules = promotionRules;
        _allowanceRules = allowanceRules;
    }

    public async Task<Response<bool>> Handle(DeletePromotionRuleCommand request, CancellationToken cancellationToken)
    {
        if (request.RuleType == PromotionRuleType.Allowance)
        {
            var allowanceRule = await _allowanceRules.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
            if (allowanceRule == null)
                return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

            allowanceRule.IsActive = false;
            allowanceRule.IsDeleted = true;
            allowanceRule.DeletedAt = DateTime.UtcNow;
            return _allowanceRules.Update(allowanceRule)
                ? SuccessMessage.Delete.ToSuccessMessage(true)
                : ErrorsMessage.FailOnDelete.ToErrorMessage(false);
        }

        var promotionRule = await _promotionRules.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (promotionRule == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        promotionRule.IsActive = false;
        promotionRule.IsDeleted = true;
        promotionRule.DeletedAt = DateTime.UtcNow;
        return _promotionRules.Update(promotionRule)
            ? SuccessMessage.Delete.ToSuccessMessage(true)
            : ErrorsMessage.FailOnDelete.ToErrorMessage(false);
    }
}
