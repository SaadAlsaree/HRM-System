namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Commands.Create;

public class CreateCorrectingAcademicAchievementHandler : CreateHandler<CorrectingAcademicAchievements, CreateCorrectingAcademicAchievementCommand>,
IRequestHandler<CreateCorrectingAcademicAchievementCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IBaseRepository<JobDegree> _repositoryJobDegree;
    private readonly IBaseRepository<JobCategory> _repositoryJobCategory;
    private readonly IPromotionAllowanceCalculationService _calculationService;
    public CreateCorrectingAcademicAchievementHandler(
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<CorrectingAcademicAchievements> repository,
        IBaseRepository<JobDegree> repositoryJobDegree,
        IBaseRepository<JobCategory> repositoryJobCategory,
        IPromotionAllowanceCalculationService calculationService) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
        _repositoryJobDegree = repositoryJobDegree;
        _repositoryJobCategory = repositoryJobCategory;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(CreateCorrectingAcademicAchievementCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.JobCategoryId = request.JobCategoryToId;
        findPromotion.JobDegreeId = request.DegreeToId;
        findPromotion.Note = "تصويب صحة الصدور";

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        var result = await base.HandleBase(request, cancellationToken);
        if (result?.Data != true)
            return result;

        _ = await _calculationService.CalculateAsync(request.EmployeeId, "correcting-academic-achievement-created", cancellationToken);
        return result;
    }

    protected override Expression<Func<CorrectingAcademicAchievements, bool>> ExistencePredicate(CreateCorrectingAcademicAchievementCommand request) => null;

    protected override CorrectingAcademicAchievements MapToEntity(CreateCorrectingAcademicAchievementCommand request)
    {
        return new CorrectingAcademicAchievements()
        {
            EmployeeId = request.EmployeeId,
            BookDate = request.BookDate,
            BookNo = request.BookNo,
            DegreeFromId = request.DegreeFromId,
            DegreeToId = request.DegreeToId,
            DueDateCategory = request.DueDateCategory,
            DueDateDegree = request.DueDateDegree,
            JobDescriptionToId = request.JobDescriptionToId,
            JobTitleFromId = request.JobTitleFromId,
            JobDescriptionFromId = request.JobDescriptionFromId,
            JobTitleToId = request.JobTitleToId,
            JobCategoryFromId = request.JobCategoryFromId,
            JobCategoryToId = request.JobCategoryToId,
            AcademicAchievementId = request.AcademicAchievementId,
            Note = request.Note,
            IsCertificateCalculation = request.IsCertificateCalculation,
            CreateBy = request.CreateBy,
        };
    }
}
