namespace HRM.Hub.Application.Features.PromotionWithholding.Commands.DeletePromotionWithholding;
public class DeletePromotionWithholdingHandler : IRequestHandler<DeletePromotionWithholdingCommand, Response<bool>>
{
    private readonly IBaseRepository<LogPromotionWithholding> _repository;
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public DeletePromotionWithholdingHandler(IBaseRepository<LogPromotionWithholding> repository, IBaseRepository<Promotion> repositoryPromotion)
    {
        _repository = repository;
        _repositoryPromotion = repositoryPromotion;
    }
    public async Task<Response<bool>> Handle(DeletePromotionWithholdingCommand request, CancellationToken cancellationToken)
    {
        var get = await _repository.Find(z => z.Id == request.Id, cancellationToken: cancellationToken);
        var getPromotion = await _repositoryPromotion.Find(z => z.Id == get.EmployeeId, cancellationToken: cancellationToken);
        if (getPromotion == null)
            return ErrorsMessage.FailOnDelete.ToErrorMessage(false);

        if (get == null)
            return ErrorsMessage.FailOnDelete.ToErrorMessage(false);

        get.IsDeleted = true;
        get.DeletedAt = DateTime.Now;
        get.DeletedBy = request.DeleteBy;   
        getPromotion.StopPromotion = false;
        _repositoryPromotion.Update(getPromotion);
        _repository.Update(get);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
