namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.UpdateEmployeeDisciplinary;

public class UpdateDisciplinaryHandler : IRequestHandler<UpdateDisciplinaryCommand, Response<bool>>
{
    private readonly IBaseRepository<EmployeeDisciplinary> _repositoryDisciplinary;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateDisciplinaryHandler(
        IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryDisciplinary = repositoryDisciplinary;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(UpdateDisciplinaryCommand request,
        CancellationToken cancellationToken)
    {
        var entity = await _repositoryDisciplinary.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (entity == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        entity.TitleOfBook = request.TitleOfBook;
        entity.TypeOfDisciplinaryId = request.TypeOfDisciplinaryId;
        entity.BookNo = request.BookNo;
        entity.BookDate = request.BookDate;
        entity.StopPromotion = request.StopPromotion;
        entity.DisciplinaryLaw = request.DisciplinaryLaw;
        entity.CountOfDayDelay = request.CountOfDayDelay;
        entity.Note = request.Note;
        entity.Reason = request.Reason;
        entity.LastUpdateAt = DateTime.UtcNow;

        if (!_repositoryDisciplinary.Update(entity))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        _ = await _calculationService.CalculateAsync(entity.EmployeeId, "disciplinary-updated", cancellationToken);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
