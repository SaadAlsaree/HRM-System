namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.UpdateThanksAndSeniority;

public class UpdateThanksAndSeniorityHandler : IRequestHandler<UpdateThanksAndSeniorityCommand, Response<bool>>
{
    private readonly IBaseRepository<ThanksAndSeniority> _repositoryThanksAndSeniority;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateThanksAndSeniorityHandler(
        IBaseRepository<ThanksAndSeniority> repositoryThanksAndSeniority,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryThanksAndSeniority = repositoryThanksAndSeniority;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(UpdateThanksAndSeniorityCommand request,
        CancellationToken cancellationToken)
    {
        var entity = await _repositoryThanksAndSeniority.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (entity == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        entity.TypeOfBookId = request.TypeOfBook;
        entity.TypeOfSeniorityId = request.TypeOfSeniority;
        entity.BookNo = request.BookNo;
        entity.DateOfBook = request.DateOfBook;
        entity.BookIssueName = request.BookIssueName;
        entity.Reason = request.Reason;
        entity.CountOfMonths = request.CountOfMonths;
        entity.IsDocumentVerify = request.IsDocumentVerify;
        entity.CalculationDate = request.CalculationDate;
        entity.Note = request.Note;
        entity.IsConsumed = false;
        entity.ConsumedAt = null;
        entity.ConsumedCalculationRunId = null;
        entity.LastUpdateAt = DateTime.UtcNow;

        if (!_repositoryThanksAndSeniority.Update(entity))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        _ = await _calculationService.CalculateAsync(entity.EmployeeId, "thanks-seniority-updated", cancellationToken);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
