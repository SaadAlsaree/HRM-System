namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.UpdateChangeDueDate;

public class UpdateChangeDueDateHandler : IRequestHandler<UpdateChangeDueDateCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IBaseRepository<ChangeDueDates> _repository;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateChangeDueDateHandler(
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<ChangeDueDates> repository,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryPromotion = repositoryPromotion;
        _repository = repository;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(UpdateChangeDueDateCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        var entity = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (entity == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        var previousDegreeDueDate = findPromotion.DueDateDegree ?? entity.NewDegreeDueDate;
        var previousCategoryDueDate = findPromotion.DueDateCategory ?? entity.NewCategoryDueDate;
        var calculation = await _calculationService.CalculateAsync(request.EmployeeId, "change-due-date-updated", cancellationToken);
        if (calculation == null)
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        entity.EmployeeId = request.EmployeeId;
        entity.CurrentDegreeDueDate = previousDegreeDueDate;
        entity.CurrentCategoryDueDate = previousCategoryDueDate;
        entity.NewDegreeDueDate = calculation.PromotionDueDate ?? previousDegreeDueDate;
        entity.NewCategoryDueDate = calculation.AllowanceDueDate ?? previousCategoryDueDate;
        entity.OrderNo = request.OrderNo;
        entity.OrderDate = request.OrderDate;
        entity.Note = string.IsNullOrWhiteSpace(request.Note) ? calculation.Summary : request.Note;
        entity.LastUpdateAt = DateTime.UtcNow;
        entity.LastUpdateBy = request.LastUpdateBy;

        return _repository.Update(entity)
            ? SuccessMessage.Update.ToSuccessMessage(true)
            : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
    }
}
