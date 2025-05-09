namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Commands.Update;
public class UpdateCorrectingAcademicAchievementHandler : UpdateHandler<CorrectingAcademicAchievements, UpdateCorrectingAcademicAchievementCommand>,
    IRequestHandler<UpdateCorrectingAcademicAchievementCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public UpdateCorrectingAcademicAchievementHandler(IBaseRepository<Promotion> repositoryPromotion, IBaseRepository<CorrectingAcademicAchievements> repository) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
    }

    public override Expression<Func<CorrectingAcademicAchievements, bool>> EntityPredicate(UpdateCorrectingAcademicAchievementCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateCorrectingAcademicAchievementCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.DueDateCategory = request.DueDateCategory;
        findPromotion.DueDateDegree = request.DueDateDegree;
        findPromotion.JobCategoryId = request.JobCategoryToId;
        findPromotion.JobDegreeId = request.DegreeToId;
        findPromotion.Note = "تصويب صحة الصدور";

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await HandleBase(request, cancellationToken);
    }
}