namespace HRM.Hub.Application.Features.PromotionRules;

// Fields shared by create/update. A null condition means "any"; the calculation picks the most specific
// matching active rule, then the highest priority.
public abstract class PromotionRuleFields
{
    public PromotionRuleType RuleType { get; set; }
    public int? JobDegreeId { get; set; }
    public int? JobCategoryId { get; set; }
    public int? AcademicAchievementId { get; set; }
    public int? ApplicableLawId { get; set; }
    public int BaseMonths { get; set; }
    public int Priority { get; set; }
    public bool IsActive { get; set; } = true;

    // The UI sends 0 for "any".
    public void NormalizeEmptyConditions()
    {
        if (JobDegreeId <= 0) JobDegreeId = null;
        if (JobCategoryId <= 0) JobCategoryId = null;
        if (AcademicAchievementId <= 0) AcademicAchievementId = null;
        if (ApplicableLawId <= 0) ApplicableLawId = null;
    }
}

public abstract class PromotionRuleFieldsValidator<T> : AbstractValidator<T> where T : PromotionRuleFields
{
    protected PromotionRuleFieldsValidator()
    {
        RuleFor(x => x.RuleType)
            .IsInEnum()
            .WithMessage("نوع القاعدة غير صحيح");

        RuleFor(x => x.BaseMonths)
            .InclusiveBetween(1, 600)
            .WithMessage("المدة يجب أن تكون بين 1 و 600 شهر");

        RuleFor(x => x.Priority)
            .InclusiveBetween(0, 1000)
            .WithMessage("الأولوية يجب أن تكون بين 0 و 1000");
    }
}
