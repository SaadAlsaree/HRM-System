
namespace HRM.Hub.Application.Features.ChangeDegree.Commands.UpdateChangeDegree;
public class UpdateChangeDegreeHandler : UpdateHandler<ChangeDegrees, UpdateChangeDegreeCommand>,
IRequestHandler<UpdateChangeDegreeCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateChangeDegreeHandler(
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<ChangeDegrees> repository,
        IPromotionAllowanceCalculationService calculationService) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
        _calculationService = calculationService;
    }

    public override Expression<Func<ChangeDegrees, bool>> EntityPredicate(UpdateChangeDegreeCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateChangeDegreeCommand request, CancellationToken cancellationToken)
    {

        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.JobCategoryId = request.JobCategoryToId;
        findPromotion.JobDegreeId = request.JobDegreeToId;
        findPromotion.Note = "تعديل الدرجة";
        findPromotion.LastUpdateAt = DateTime.Now;
        findPromotion.LastUpdateBy = request.LastUpdateBy;

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        var response = await HandleBase(request, cancellationToken);
        if (!response.Succeeded)
            return response;

        _ = await _calculationService.CalculateAsync(request.EmployeeId, "change-degree-updated", cancellationToken);
        return response;
    }
}
