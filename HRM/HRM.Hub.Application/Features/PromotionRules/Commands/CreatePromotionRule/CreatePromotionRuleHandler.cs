namespace HRM.Hub.Application.Features.PromotionRules.Commands.CreatePromotionRule;

public class CreatePromotionRuleHandler : PromotionRuleHandlerBase, IRequestHandler<CreatePromotionRuleCommand, Response<bool>>
{
    public CreatePromotionRuleHandler(
        IBaseRepository<PromotionAllowanceRule> promotionRules,
        IBaseRepository<AnnualAllowanceRule> allowanceRules,
        IBaseRepository<JobDegree> jobDegrees,
        IBaseRepository<JobCategory> jobCategories,
        IBaseRepository<AcademicAchievement> academicAchievements,
        IBaseRepository<Laws> laws)
        : base(promotionRules, allowanceRules, jobDegrees, jobCategories, academicAchievements, laws)
    {
    }

    public async Task<Response<bool>> Handle(CreatePromotionRuleCommand request, CancellationToken cancellationToken)
    {
        request.NormalizeEmptyConditions();
        var error = await ValidateAsync(request, null, cancellationToken);
        if (error != null)
            return Fail(error);

        if (request.RuleType == PromotionRuleType.Promotion)
        {
            await PromotionRules.Create(new PromotionAllowanceRule
            {
                CalculationKind = PromotionAllowanceCalculationKind.Promotion,
                JobDegreeId = request.JobDegreeId,
                JobCategoryId = request.JobCategoryId,
                AcademicAchievementId = request.AcademicAchievementId,
                ApplicableLawId = request.ApplicableLawId,
                BaseMonths = request.BaseMonths,
                Priority = request.Priority,
                IsActive = request.IsActive,
                StatusId = Status.Active
            }, cancellationToken);
        }
        else
        {
            await AllowanceRules.Create(new AnnualAllowanceRule
            {
                JobDegreeId = request.JobDegreeId,
                JobCategoryId = request.JobCategoryId,
                AcademicAchievementId = request.AcademicAchievementId,
                ApplicableLawId = request.ApplicableLawId,
                BaseMonths = request.BaseMonths,
                Priority = request.Priority,
                IsActive = request.IsActive,
                StatusId = Status.Active
            }, cancellationToken);
        }

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}
