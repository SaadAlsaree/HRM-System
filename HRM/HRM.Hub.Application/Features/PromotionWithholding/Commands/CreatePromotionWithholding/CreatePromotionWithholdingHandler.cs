namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.CreatePromotionWithholding;

public class CreatePromotionWithholdingHandler : CreateHandler<LogPromotionWithholding, CreatePromotionWithholdingCommand>,
    IRequestHandler<CreatePromotionWithholdingCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public CreatePromotionWithholdingHandler(IBaseRepository<LogPromotionWithholding> repository, IBaseRepository<Promotion> repositoryPromotion) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
    }

    public async Task<Response<bool>> Handle(CreatePromotionWithholdingCommand request, CancellationToken cancellationToken)
    {
        var get = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (get == null)
            return ErrorsMessage.FailOnCreate.ToErrorMessage(false);

        get.StopPromotion = true;

        _repositoryPromotion.Update(get);
        return await base.HandleBase(request, cancellationToken);
    }

    protected override Expression<Func<LogPromotionWithholding, bool>> ExistencePredicate(CreatePromotionWithholdingCommand request) => null;

    protected override LogPromotionWithholding MapToEntity(CreatePromotionWithholdingCommand request)
    {
        return new LogPromotionWithholding()
        {
            EmployeeId = request.EmployeeId,
            ScheduledPromotionDate = request.ScheduledPromotionDate,
            WithholdingDate = request.WithholdingDate,
            ReasonForWithholding = request.ReasonForWithholding,
            Notes = request.Notes,
            CreateBy = request.CreateBy,
        };
    }
}
