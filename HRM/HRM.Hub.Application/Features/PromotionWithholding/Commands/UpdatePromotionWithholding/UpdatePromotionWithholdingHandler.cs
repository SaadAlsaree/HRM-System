namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.UpdatePromotionWithholding;

public class UpdatePromotionWithholdingHandler : UpdateHandler<LogPromotionWithholding, UpdatePromotionWithholdingCommand>,
    IRequestHandler<UpdatePromotionWithholdingCommand, Response<bool>>
{
    public UpdatePromotionWithholdingHandler(IBaseRepository<LogPromotionWithholding> repository) : base(repository)
    {
    }

    public override Expression<Func<LogPromotionWithholding, bool>> EntityPredicate(UpdatePromotionWithholdingCommand request) =>
            x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdatePromotionWithholdingCommand request, CancellationToken cancellationToken) =>
            await HandleBase(request, cancellationToken);
}
