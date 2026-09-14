namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.RecalculateAllPromotions;

public class RecalculateAllPromotionsHandler : IRequestHandler<RecalculateAllPromotionsCommand, Response<RecalculateAllPromotionsResult>>
{
    private readonly IBaseRepository<Employees> _employeeRepository;
    private readonly IPromotionAllowanceCalculationService _calculationService;
    private readonly ILogger<RecalculateAllPromotionsHandler> _logger;

    public RecalculateAllPromotionsHandler(
        IBaseRepository<Employees> employeeRepository,
        IPromotionAllowanceCalculationService calculationService,
        ILogger<RecalculateAllPromotionsHandler> logger)
    {
        _employeeRepository = employeeRepository;
        _calculationService = calculationService;
        _logger = logger;
    }

    public async Task<Response<RecalculateAllPromotionsResult>> Handle(RecalculateAllPromotionsCommand request, CancellationToken cancellationToken)
    {
        var employeeIds = await _employeeRepository
            .Query(x => x.Promotion != null)
            .Select(x => x.Id)
            .ToListAsync(cancellationToken);

        var result = new RecalculateAllPromotionsResult { Total = employeeIds.Count };
        foreach (var employeeId in employeeIds)
        {
            // One employee's bad data must not stop the rest.
            try
            {
                if (await _calculationService.CalculateAsync(employeeId, "recalculate-all", cancellationToken) != null)
                    result.Succeeded++;
                else
                    result.Failed++;
            }
            catch (Exception ex)
            {
                result.Failed++;
                _logger.LogError(ex, "Promotion recalculation failed for employee {EmployeeId}", employeeId);
            }
        }

        return SuccessMessage.Update.ToSuccessMessage(result);
    }
}
