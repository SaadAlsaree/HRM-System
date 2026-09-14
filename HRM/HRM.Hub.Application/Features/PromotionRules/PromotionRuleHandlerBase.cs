namespace HRM.Hub.Application.Features.PromotionRules;

public abstract class PromotionRuleHandlerBase
{
    protected readonly IBaseRepository<PromotionAllowanceRule> PromotionRules;
    protected readonly IBaseRepository<AnnualAllowanceRule> AllowanceRules;
    private readonly IBaseRepository<JobDegree> _jobDegrees;
    private readonly IBaseRepository<JobCategory> _jobCategories;
    private readonly IBaseRepository<AcademicAchievement> _academicAchievements;
    private readonly IBaseRepository<Laws> _laws;

    protected PromotionRuleHandlerBase(
        IBaseRepository<PromotionAllowanceRule> promotionRules,
        IBaseRepository<AnnualAllowanceRule> allowanceRules,
        IBaseRepository<JobDegree> jobDegrees,
        IBaseRepository<JobCategory> jobCategories,
        IBaseRepository<AcademicAchievement> academicAchievements,
        IBaseRepository<Laws> laws)
    {
        PromotionRules = promotionRules;
        AllowanceRules = allowanceRules;
        _jobDegrees = jobDegrees;
        _jobCategories = jobCategories;
        _academicAchievements = academicAchievements;
        _laws = laws;
    }

    protected static Response<bool> Fail(string message) =>
        Response<bool>.Fail(new MessageResponse { Message = message, Code = "PromotionRuleInvalid" });

    // Returns an error message, or null when the rule can be saved.
    protected async Task<string> ValidateAsync(PromotionRuleFields request, int? excludeRuleId, CancellationToken ct)
    {
        if (request.JobDegreeId.HasValue &&
            await _jobDegrees.Find(x => x.Id == request.JobDegreeId, cancellationToken: ct) == null)
            return "الدرجة الوظيفية غير موجودة";

        if (request.JobCategoryId.HasValue)
        {
            var category = await _jobCategories.Find(x => x.Id == request.JobCategoryId, cancellationToken: ct);
            if (category == null)
                return "الفئة الوظيفية غير موجودة";
            if (request.JobDegreeId.HasValue && category.DegreeId != request.JobDegreeId)
                return "الفئة المختارة لا تتبع الدرجة المختارة";
        }

        if (request.AcademicAchievementId.HasValue &&
            await _academicAchievements.Find(x => x.Id == request.AcademicAchievementId, cancellationToken: ct) == null)
            return "التحصيل الدراسي غير موجود";

        if (request.ApplicableLawId.HasValue &&
            await _laws.Find(x => x.Id == request.ApplicableLawId, cancellationToken: ct) == null)
            return "القانون غير موجود";

        // Two active rules with identical conditions would make the chosen period depend on priority ties.
        if (request.IsActive)
        {
            var duplicate = request.RuleType == PromotionRuleType.Promotion
                ? await PromotionRules.Query(x => x.IsActive
                        && x.CalculationKind == PromotionAllowanceCalculationKind.Promotion
                        && x.Id != (excludeRuleId ?? 0)
                        && x.JobDegreeId == request.JobDegreeId
                        && x.JobCategoryId == request.JobCategoryId
                        && x.AcademicAchievementId == request.AcademicAchievementId
                        && x.ApplicableLawId == request.ApplicableLawId)
                    .AnyAsync(ct)
                : await AllowanceRules.Query(x => x.IsActive
                        && x.Id != (excludeRuleId ?? 0)
                        && x.JobDegreeId == request.JobDegreeId
                        && x.JobCategoryId == request.JobCategoryId
                        && x.AcademicAchievementId == request.AcademicAchievementId
                        && x.ApplicableLawId == request.ApplicableLawId)
                    .AnyAsync(ct);

            if (duplicate)
                return "توجد قاعدة فعالة بنفس الشروط، عدّلها أو عطّلها بدلاً من إضافة قاعدة جديدة";
        }

        return null;
    }
}
