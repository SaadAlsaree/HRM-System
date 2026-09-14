namespace HRM.Hub.Application.Features.PromotionRules;

// Which table a rule lives in: promotion periods are read from PromotionAllowanceRule (CalculationKind = Promotion),
// annual allowance periods from AnnualAllowanceRule — see PromotionAllowanceCalculationService.
public enum PromotionRuleType
{
    Promotion = 1,
    Allowance = 2
}
