namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.UpdateChangeDueDate;
public class UpdateChangeDueDateHandler : UpdateHandler<ChangeDueDates, UpdateChangeDueDateCommand>,
IRequestHandler<UpdateChangeDueDateCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public UpdateChangeDueDateHandler(IBaseRepository<Promotion> repositoryPromotion, IBaseRepository<ChangeDueDates> repository) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
    }

    public override Expression<Func<ChangeDueDates, bool>> EntityPredicate(UpdateChangeDueDateCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateChangeDueDateCommand request, CancellationToken cancellationToken)
    {

        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.DueDateCategory = request.NewCategoryDueDate;
        findPromotion.DueDateDegree = request.NewDegreeDueDate;
        findPromotion.Note = "تعديل تاريخ الاستحقاق";

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await HandleBase(request, cancellationToken);
    }
}