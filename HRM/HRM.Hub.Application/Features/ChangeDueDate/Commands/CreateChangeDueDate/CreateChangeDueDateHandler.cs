namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.CreateChangeDueDate;

public class CreateChangeDueDateHandler : IRequestHandler<CreateChangeDueDateCommand, Response<bool>>
{
    private readonly IBaseRepository<ChangeDueDates> _repository;
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public CreateChangeDueDateHandler(
        IBaseRepository<ChangeDueDates> repository,
        IBaseRepository<Promotion> repositoryPromotion,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repository = repository;
        _repositoryPromotion = repositoryPromotion;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(CreateChangeDueDateCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        var previousDegreeDueDate = findPromotion.DueDateDegree ?? DateOnly.FromDateTime(DateTime.Today);
        var previousCategoryDueDate = findPromotion.DueDateCategory ?? DateOnly.FromDateTime(DateTime.Today);
        var calculation = await _calculationService.CalculateAsync(request.EmployeeId, "change-due-date-created", cancellationToken);
        if (calculation == null)
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        var entity = new ChangeDueDates
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            CurrentCategoryDueDate = previousCategoryDueDate,
            CurrentDegreeDueDate = previousDegreeDueDate,
            NewCategoryDueDate = calculation.AllowanceDueDate ?? previousCategoryDueDate,
            NewDegreeDueDate = calculation.PromotionDueDate ?? previousDegreeDueDate,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            Note = string.IsNullOrWhiteSpace(request.Note) ? calculation.Summary : request.Note,
            CreateBy = request.CreateBy,
            StatusId = Status.Unverified
        };

        var result = await _repository.Create(entity, cancellationToken);
        return result == null ? ErrorsMessage.FailOnCreate.ToErrorMessage(false) : SuccessMessage.Create.ToSuccessMessage(true);
    }
}
