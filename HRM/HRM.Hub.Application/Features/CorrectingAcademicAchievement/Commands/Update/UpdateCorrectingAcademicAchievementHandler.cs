namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Commands.Update;
public class UpdateCorrectingAcademicAchievementHandler : UpdateHandler<CorrectingAcademicAchievements, UpdateCorrectingAcademicAchievementCommand>,
    IRequestHandler<UpdateCorrectingAcademicAchievementCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IPromotionAllowanceCalculationService _calculationService;
    public UpdateCorrectingAcademicAchievementHandler(
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<CorrectingAcademicAchievements> repository,
        IPromotionAllowanceCalculationService calculationService) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
        _calculationService = calculationService;
    }

    public override Expression<Func<CorrectingAcademicAchievements, bool>> EntityPredicate(UpdateCorrectingAcademicAchievementCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateCorrectingAcademicAchievementCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.JobCategoryId = request.JobCategoryToId;
        findPromotion.JobDegreeId = request.DegreeToId;
        findPromotion.Note = "تصويب صحة الصدور";

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        var result = await HandleBase(request, cancellationToken);
        if (result?.Data != true)
            return result;

        _ = await _calculationService.CalculateAsync(request.EmployeeId, "correcting-academic-achievement-updated", cancellationToken);
        return result;
    }
}