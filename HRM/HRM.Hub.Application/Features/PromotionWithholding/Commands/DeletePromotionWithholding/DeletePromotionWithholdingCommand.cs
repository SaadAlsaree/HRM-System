namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.DeletePromotionWithholding;

public class DeletePromotionWithholdingCommand:IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid? DeleteBy { get; set; }
}