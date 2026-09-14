namespace HRM.Hub.Application.Features.PromotionRules.Queries.GetPromotionRules;

public class GetPromotionRulesViewModel
{
    public int Id { get; set; }
    public PromotionRuleType RuleType { get; set; }
    public int? JobDegreeId { get; set; }
    public string JobDegreeName { get; set; }
    public int? JobCategoryId { get; set; }
    public string JobCategoryName { get; set; }
    public int? AcademicAchievementId { get; set; }
    public string AcademicAchievementName { get; set; }
    public int? ApplicableLawId { get; set; }
    public string ApplicableLawName { get; set; }
    public int BaseMonths { get; set; }
    public int Priority { get; set; }
    public bool IsActive { get; set; }
}
