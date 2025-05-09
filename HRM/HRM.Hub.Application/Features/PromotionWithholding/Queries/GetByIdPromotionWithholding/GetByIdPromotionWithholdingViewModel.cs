namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetByIdPromotionWithholding;

public class GetByIdPromotionWithholdingViewModel:BaseViewModel<Guid>
{
    public DateOnly? ScheduledPromotionDate { get; set; }
    public DateOnly? WithholdingDate { get; set; }
    public string ReasonForWithholding { get; set; }
    public string Notes { get; set; }
}
