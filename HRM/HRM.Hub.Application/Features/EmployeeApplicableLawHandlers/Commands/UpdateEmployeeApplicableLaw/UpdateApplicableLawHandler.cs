namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.UpdateEmployeeApplicableLaw;

public class UpdateApplicableLawHandler : IRequestHandler<UpdateApplicableLawCommand, Response<bool>>
{
    private readonly IBaseRepository<EmployeeApplicableLaws> _repositoryApplicableLaw;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateApplicableLawHandler(
        IBaseRepository<EmployeeApplicableLaws> repositoryApplicableLaw,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryApplicableLaw = repositoryApplicableLaw;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(UpdateApplicableLawCommand request,
        CancellationToken cancellationToken)
    {
        var entity = await _repositoryApplicableLaw.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (entity == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        entity.Note = request.Note;
        entity.LastUpdateAt = DateTime.UtcNow;

        if (!_repositoryApplicableLaw.Update(entity))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        _ = await _calculationService.CalculateAsync(entity.EmployeeId, "applicable-law-updated", cancellationToken);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
