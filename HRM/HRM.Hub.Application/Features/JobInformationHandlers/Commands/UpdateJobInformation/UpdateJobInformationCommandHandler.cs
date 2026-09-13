namespace HRM.Hub.Application.Features.JobInformationHandlers.Commands.UpdateJobInformation;
public class UpdateJobInformationCommandHandler : UpdateHandler<JobInformation, UpdateJobInformationCommand>, IRequestHandler<UpdateJobInformationCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateJobInformationCommandHandler(
        IBaseRepository<JobInformation> jobInformationRepository,
        IBaseRepository<Promotion> repositoryPromotion,
        IPromotionAllowanceCalculationService calculationService)
        : base(jobInformationRepository)
    {
        _repositoryPromotion = repositoryPromotion;
        _calculationService = calculationService;
    }

    public override Expression<Func<JobInformation, bool>> EntityPredicate(UpdateJobInformationCommand request) => 
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateJobInformationCommand request, CancellationToken cancellationToken)
    {
        var jobInformation = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        var previousHireDate = jobInformation?.HireDate;

        var result = await HandleBase(request, cancellationToken);
        if (!result.Succeeded || !previousHireDate.HasValue || previousHireDate.Value == request.HireDate)
            return result;

        // A promotion period that started at the hire date follows a hire date correction.
        // JobInformation shares the employee's PK.
        var promotion = await _repositoryPromotion.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (promotion?.DegreeStartDate == previousHireDate)
        {
            promotion.DegreeStartDate = request.HireDate;
            promotion.LastUpdateAt = DateTime.UtcNow;
            _repositoryPromotion.Update(promotion);
            _ = await _calculationService.CalculateAsync(request.Id, "job-information-hire-date-updated", cancellationToken);
        }

        return result;
    }
}
