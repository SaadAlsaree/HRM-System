namespace HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
public class ChangeStatusHandler<TId> : IRequestHandler<ChangeStatusCommand<TId>, Response<bool>>
{
    private readonly IExtensionRepository<TId> _extensionRepository;
    private readonly IPromotionAllowanceAffectedEmployeeResolver _affectedEmployeeResolver;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public ChangeStatusHandler(
        IExtensionRepository<TId> extensionRepository,
        IPromotionAllowanceAffectedEmployeeResolver affectedEmployeeResolver,
        IPromotionAllowanceCalculationService calculationService)
    {
        _extensionRepository = extensionRepository ?? throw new ArgumentNullException(nameof(extensionRepository));
        _affectedEmployeeResolver = affectedEmployeeResolver;
        _calculationService = calculationService;
    }
    public async Task<Response<bool>> Handle(ChangeStatusCommand<TId> request, CancellationToken cancellationToken)
    {
        Guid? employeeId = null;
        if (request.Id is Guid guidId)
            employeeId = await _affectedEmployeeResolver.ResolveEmployeeIdAsync(request.TableName, guidId, cancellationToken);

        var result = await _extensionRepository.ChangeStatusRecordAsync(request);
        if (result && employeeId.HasValue)
            _ = await _calculationService.CalculateAsync(employeeId.Value, $"change-status-{request.TableName}", cancellationToken);

        return result ? SuccessMessage.Update.ToSuccessMessage(result) : ErrorsMessage.FailOnUpdate.ToErrorMessage(result);
    }
}
