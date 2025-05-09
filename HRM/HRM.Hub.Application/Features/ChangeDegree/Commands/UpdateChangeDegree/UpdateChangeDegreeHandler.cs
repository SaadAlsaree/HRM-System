
namespace HRM.Hub.Application.Features.ChangeDegree.Commands.UpdateChangeDegree;
public class UpdateChangeDegreeHandler : UpdateHandler<ChangeDegrees, UpdateChangeDegreeCommand>,
IRequestHandler<UpdateChangeDegreeCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public UpdateChangeDegreeHandler(IBaseRepository<Promotion> repositoryPromotion, IBaseRepository<ChangeDegrees> repository) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
    }

    public override Expression<Func<ChangeDegrees, bool>> EntityPredicate(UpdateChangeDegreeCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateChangeDegreeCommand request, CancellationToken cancellationToken)
    {

        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.DueDateCategory = request.NewCategoryDueDate;
        findPromotion.DueDateDegree = request.NewDegreeDueDate;
        findPromotion.Note = "تعديل الدرجة";
        findPromotion.LastUpdateAt = DateTime.Now;
        findPromotion.LastUpdateBy = request.LastUpdateBy;

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await HandleBase(request, cancellationToken);
    }
}