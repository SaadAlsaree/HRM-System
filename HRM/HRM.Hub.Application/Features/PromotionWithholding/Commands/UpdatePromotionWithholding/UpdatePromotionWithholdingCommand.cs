namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.UpdatePromotionWithholding;

public class UpdatePromotionWithholdingCommand:IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? ScheduledPromotionDate { get; set; }
    public DateOnly? WithholdingDate { get; set; }
    public string ReasonForWithholding { get; set; }
    public string Notes { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
