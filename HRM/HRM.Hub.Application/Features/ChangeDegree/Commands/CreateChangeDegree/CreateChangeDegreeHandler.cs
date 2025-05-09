namespace HRM.Hub.Application.Features.ChangeDegree.Commands.CreateChangeDegree;

public class CreateChangeDegreeHandler : CreateHandler<ChangeDegrees, CreateChangeDegreeCommand>,
IRequestHandler<CreateChangeDegreeCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public CreateChangeDegreeHandler(IBaseRepository<ChangeDegrees> repository, IBaseRepository<Promotion> repositoryPromotion) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
    }

    public async Task<Response<bool>> Handle(CreateChangeDegreeCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.DueDateCategory = request.NewCategoryDueDate;
        findPromotion.DueDateDegree = request.NewDegreeDueDate;
        findPromotion.Note = "تغيير الدرجة";
        findPromotion.LastUpdateBy = request.CreateBy;
        findPromotion.LastUpdateAt = DateTime.Now;
        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await base.HandleBase(request, cancellationToken);
    }

    protected override Expression<Func<ChangeDegrees, bool>> ExistencePredicate(CreateChangeDegreeCommand request) => null;

    protected override ChangeDegrees MapToEntity(CreateChangeDegreeCommand request)
    {
        return new ChangeDegrees()
        {
            EmployeeId = request.EmployeeId,
            JobCategoryFromId = request.JobCategoryFromId,
            JobCategoryToId = request.JobCategoryToId,
            JobDegreeFromId = request.JobDegreeFromId,
            JobDegreeToId = request.JobDegreeToId,
            JobDescriptionFromId = request.JobDescriptionFromId,
            JobDescriptionToId = request.JobDescriptionToId,
            JobTitleFromId = request.JobTitleFromId,
            JobTitleToId = request.JobTitleToId,
            OldDegreeDueDate = request.OldDegreeDueDate,
            OldCategoryDueDate = request.OldCategoryDueDate,
            NewCategoryDueDate = request.NewCategoryDueDate,
            NewDegreeDueDate = request.NewDegreeDueDate,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            Note = request.Note,
            CreateBy = request.CreateBy,
        };
    }
}