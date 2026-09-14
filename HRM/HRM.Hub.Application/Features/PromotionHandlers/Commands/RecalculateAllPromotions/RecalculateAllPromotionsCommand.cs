namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.RecalculateAllPromotions;

// Re-runs the promotion/allowance calculation for every employee. Needed after changing periods or rules,
// because the calculation otherwise only runs when an employee's own records change.
public class RecalculateAllPromotionsCommand : IRequest<Response<RecalculateAllPromotionsResult>>
{
}

public class RecalculateAllPromotionsResult
{
    public int Total { get; set; }
    public int Succeeded { get; set; }
    public int Failed { get; set; }
}
