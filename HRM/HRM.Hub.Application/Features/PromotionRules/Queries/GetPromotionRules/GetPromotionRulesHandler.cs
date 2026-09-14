using HRM.Hub.Application.Extensions;

namespace HRM.Hub.Application.Features.PromotionRules.Queries.GetPromotionRules;

public class GetPromotionRulesHandler : IRequestHandler<GetPromotionRulesQuery, Response<PagedResult<GetPromotionRulesViewModel>>>
{
    private readonly IBaseRepository<PromotionAllowanceRule> _promotionRules;
    private readonly IBaseRepository<AnnualAllowanceRule> _allowanceRules;

    public GetPromotionRulesHandler(
        IBaseRepository<PromotionAllowanceRule> promotionRules,
        IBaseRepository<AnnualAllowanceRule> allowanceRules)
    {
        _promotionRules = promotionRules;
        _allowanceRules = allowanceRules;
    }

    public async Task<Response<PagedResult<GetPromotionRulesViewModel>>> Handle(GetPromotionRulesQuery request, CancellationToken cancellationToken)
    {
        var query = request.RuleType == PromotionRuleType.Allowance
            ? _allowanceRules.Query().Select(x => new GetPromotionRulesViewModel
            {
                Id = x.Id,
                RuleType = PromotionRuleType.Allowance,
                JobDegreeId = x.JobDegreeId,
                JobDegreeName = x.JobDegree != null ? x.JobDegree.Name : null,
                JobCategoryId = x.JobCategoryId,
                JobCategoryName = x.JobCategory != null ? x.JobCategory.Name : null,
                AcademicAchievementId = x.AcademicAchievementId,
                AcademicAchievementName = x.AcademicAchievement != null ? x.AcademicAchievement.Name : null,
                ApplicableLawId = x.ApplicableLawId,
                ApplicableLawName = x.ApplicableLaw != null ? x.ApplicableLaw.Name : null,
                BaseMonths = x.BaseMonths,
                Priority = x.Priority,
                IsActive = x.IsActive
            })
            : _promotionRules.Query(x => x.CalculationKind == PromotionAllowanceCalculationKind.Promotion).Select(x => new GetPromotionRulesViewModel
            {
                Id = x.Id,
                RuleType = PromotionRuleType.Promotion,
                JobDegreeId = x.JobDegreeId,
                JobDegreeName = x.JobDegree != null ? x.JobDegree.Name : null,
                JobCategoryId = x.JobCategoryId,
                JobCategoryName = x.JobCategory != null ? x.JobCategory.Name : null,
                AcademicAchievementId = x.AcademicAchievementId,
                AcademicAchievementName = x.AcademicAchievement != null ? x.AcademicAchievement.Name : null,
                ApplicableLawId = x.ApplicableLawId,
                ApplicableLawName = x.ApplicableLaw != null ? x.ApplicableLaw.Name : null,
                BaseMonths = x.BaseMonths,
                Priority = x.Priority,
                IsActive = x.IsActive
            });

        var count = await query.CountAsync(cancellationToken);
        var items = await query
            .OrderByDescending(x => x.IsActive)
            .ThenByDescending(x => x.Priority)
            .ThenBy(x => x.Id)
            .ApplyPagination(request)
            .ToListAsync(cancellationToken);

        // An empty rule list is a normal state, not an error.
        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetPromotionRulesViewModel>
        {
            Items = items,
            TotalCount = count
        });
    }
}
