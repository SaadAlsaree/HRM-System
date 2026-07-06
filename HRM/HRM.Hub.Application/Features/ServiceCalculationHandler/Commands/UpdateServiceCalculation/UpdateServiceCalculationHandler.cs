namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.UpdateServiceCalculation
{
    public class UpdateServiceCalculationHandler :
        UpdateHandler<ServiceCalculation, UpdateServiceCalculationCommend>,
        IRequestHandler<UpdateServiceCalculationCommend, Response<bool>>
    {
        private readonly IPromotionAllowanceCalculationService _calculationService;

        public UpdateServiceCalculationHandler(
            IBaseRepository<ServiceCalculation> repositoryServiceCalculation,
            IPromotionAllowanceCalculationService calculationService)
            : base(repositoryServiceCalculation)
        {
            _calculationService = calculationService;
        }

        public override Expression<Func<ServiceCalculation, bool>>
            EntityPredicate(UpdateServiceCalculationCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateServiceCalculationCommend request,
            CancellationToken cancellationToken)
        {
            var response = await HandleBase(request, cancellationToken);
            if (!response.Succeeded)
                return response;

            _ = await _calculationService.CalculateAsync(request.EmployeeId, "service-calculation-updated", cancellationToken);
            return response;
        }
    }
}
