namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetPromotionWithholding;

public class GetPromotionWithholdingViewModel : BaseViewModel<Guid>
{
    public DateOnly? ScheduledPromotionDate { get; set; }
    public DateOnly? WithholdingDate { get; set; }
    public string ReasonForWithholding { get; set; }
    public string Notes { get; set; }
}
