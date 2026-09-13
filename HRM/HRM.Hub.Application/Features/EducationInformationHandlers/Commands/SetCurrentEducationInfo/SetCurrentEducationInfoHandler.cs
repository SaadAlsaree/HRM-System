namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.SetCurrentEducationInfo;

public class SetCurrentEducationInfoHandler : IRequestHandler<SetCurrentEducationInfoCommand, Response<bool>>
{
    private readonly IBaseRepository<EducationInformation> _repositoryEducationInfo;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public SetCurrentEducationInfoHandler(
        IBaseRepository<EducationInformation> repositoryEducationInfo,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryEducationInfo = repositoryEducationInfo;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(SetCurrentEducationInfoCommand request, CancellationToken cancellationToken)
    {
        var target = await _repositoryEducationInfo.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (target == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        // Exactly one certificate per employee is the approved (current) one.
        var educationInfo = await _repositoryEducationInfo
            .Query(x => x.EmployeeId == target.EmployeeId)
            .ToListAsync(cancellationToken);

        foreach (var item in educationInfo)
        {
            var isCurrent = item.Id == target.Id;
            if (item.IsCurrent == isCurrent)
                continue;

            item.IsCurrent = isCurrent;
            item.LastUpdateAt = DateTime.UtcNow;
        }

        await _repositoryEducationInfo.UpdateRange(educationInfo, cancellationToken: cancellationToken);

        // The current certificate selects the promotion/allowance rule, so recalculate.
        _ = await _calculationService.CalculateAsync(target.EmployeeId, "education-information-set-current", cancellationToken);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
