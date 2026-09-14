namespace HRM.Hub.Application.Features.PromotionRules.Commands.UpdatePromotionRule;

public class UpdatePromotionRuleHandler : PromotionRuleHandlerBase, IRequestHandler<UpdatePromotionRuleCommand, Response<bool>>
{
    public UpdatePromotionRuleHandler(
        IBaseRepository<PromotionAllowanceRule> promotionRules,
        IBaseRepository<AnnualAllowanceRule> allowanceRules,
        IBaseRepository<JobDegree> jobDegrees,
        IBaseRepository<JobCategory> jobCategories,
        IBaseRepository<AcademicAchievement> academicAchievements,
        IBaseRepository<Laws> laws)
        : base(promotionRules, allowanceRules, jobDegrees, jobCategories, academicAchievements, laws)
    {
    }

    public async Task<Response<bool>> Handle(UpdatePromotionRuleCommand request, CancellationToken cancellationToken)
    {
        request.NormalizeEmptyConditions();
        var error = await ValidateAsync(request, request.Id, cancellationToken);
        if (error != null)
            return Fail(error);

        // The rule type selects the table and cannot be changed by an update.
        if (request.RuleType == PromotionRuleType.Promotion)
        {
            var rule = await PromotionRules.Find(
                x => x.Id == request.Id && x.CalculationKind == PromotionAllowanceCalculationKind.Promotion,
                cancellationToken: cancellationToken);
            if (rule == null)
                return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

            rule.JobDegreeId = request.JobDegreeId;
            rule.JobCategoryId = request.JobCategoryId;
            rule.AcademicAchievementId = request.AcademicAchievementId;
            rule.ApplicableLawId = request.ApplicableLawId;
            rule.BaseMonths = request.BaseMonths;
            rule.Priority = request.Priority;
            rule.IsActive = request.IsActive;
            rule.LastUpdateAt = DateTime.UtcNow;
            if (!PromotionRules.Update(rule))
                return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
        }
        else
        {
            var rule = await AllowanceRules.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
            if (rule == null)
                return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

            rule.JobDegreeId = request.JobDegreeId;
            rule.JobCategoryId = request.JobCategoryId;
            rule.AcademicAchievementId = request.AcademicAchievementId;
            rule.ApplicableLawId = request.ApplicableLawId;
            rule.BaseMonths = request.BaseMonths;
            rule.Priority = request.Priority;
            rule.IsActive = request.IsActive;
            rule.LastUpdateAt = DateTime.UtcNow;
            if (!AllowanceRules.Update(rule))
                return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
        }

        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
