using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.UpdateEducationInformation;
public class UpdateEducationInfoHandler :
        UpdateHandler<EducationInformation, UpdateEducationInfoCommand>,
        IRequestHandler<UpdateEducationInfoCommand, Response<bool>>
{
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateEducationInfoHandler(
        IBaseRepository<EducationInformation> repositoryEducationInfo,
        IPromotionAllowanceCalculationService calculationService)
        : base(repositoryEducationInfo)
    {
        _calculationService = calculationService;
    }

    public override Expression<Func<EducationInformation, bool>>
        EntityPredicate(UpdateEducationInfoCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateEducationInfoCommand request,
        CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (!result.Succeeded)
            return result;

        // The academic achievement selects the promotion/allowance rule, so recalculate.
        // Read the EmployeeId from the saved record rather than trusting the request body.
        var entity = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (entity != null)
            _ = await _calculationService.CalculateAsync(entity.EmployeeId, "education-information-updated", cancellationToken);

        return result;
    }
}
