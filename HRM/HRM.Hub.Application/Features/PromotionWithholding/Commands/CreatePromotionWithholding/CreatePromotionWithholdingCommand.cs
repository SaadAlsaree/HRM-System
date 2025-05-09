namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.CreatePromotionWithholding;

public class CreatePromotionWithholdingCommand:IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public DateOnly? ScheduledPromotionDate { get; set; }
    public DateOnly? WithholdingDate { get; set; }
    public string ReasonForWithholding { get; set; }
    public string Notes { get; set; }
    public Guid? CreateBy { get; set; }
}
