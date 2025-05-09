namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.UpdateServiceCalculation
{
    public class UpdateServiceCalculationHandler :
        UpdateHandler<ServiceCalculation, UpdateServiceCalculationCommend>,
        IRequestHandler<UpdateServiceCalculationCommend, Response<bool>>
    {
        public UpdateServiceCalculationHandler(IBaseRepository<ServiceCalculation> repositoryServiceCalculation)
            : base(repositoryServiceCalculation)
        {
        }

        public override Expression<Func<ServiceCalculation, bool>>
            EntityPredicate(UpdateServiceCalculationCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateServiceCalculationCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}