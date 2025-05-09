namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.CreateServiceCalculation
{
    public class CreateServiceCalculationHandler : CreateHandler<ServiceCalculation, CreateServiceCalculationCommend>,
        IRequestHandler<CreateServiceCalculationCommend, Response<bool>>
    {
        public CreateServiceCalculationHandler(IBaseRepository<ServiceCalculation> repositoryServiceCalculation)
            : base(repositoryServiceCalculation)
        {
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
            return await HandleBase(request, cancellationToken);
        }
    }
}