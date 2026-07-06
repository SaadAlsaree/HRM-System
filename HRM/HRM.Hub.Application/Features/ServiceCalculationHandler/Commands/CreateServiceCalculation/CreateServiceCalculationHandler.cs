namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.CreateServiceCalculation
{
    public class CreateServiceCalculationHandler : CreateHandler<ServiceCalculation, CreateServiceCalculationCommend>,
        IRequestHandler<CreateServiceCalculationCommend, Response<bool>>
    {
        private readonly IPromotionAllowanceCalculationService _calculationService;

        public CreateServiceCalculationHandler(
            IBaseRepository<ServiceCalculation> repositoryServiceCalculation,
            IPromotionAllowanceCalculationService calculationService)
            : base(repositoryServiceCalculation)
        {
            _calculationService = calculationService;
        }

        protected override Expression<Func<ServiceCalculation, bool>> ExistencePredicate(CreateServiceCalculationCommend request) =>
            x => false;

        protected override ServiceCalculation MapToEntity(CreateServiceCalculationCommend request)
        {
            return new ServiceCalculation
            {
                EmployeeId = request.EmployeeId,
                TypeOfServiceId = request.TypeOfServiceId,
                CountOfMonth = request.CountOfMonth,
                OrderNo = request.OrderNo,
                OrderDate = request.OrderDate,
                IsPoliticalTermination = request.IsPoliticalTermination,
                Notes = request.Notes,
            };
        }

        public async Task<Response<bool>> Handle(CreateServiceCalculationCommend request, CancellationToken cancellationToken)
        {
            var response = await HandleBase(request, cancellationToken);
            if (!response.Succeeded)
                return response;

            _ = await _calculationService.CalculateAsync(request.EmployeeId, "service-calculation-created", cancellationToken);
            return response;
        }
    }
}
