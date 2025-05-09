namespace HRM.Hub.Application.Features.Valuations.Commands.CreateValuation
{
    public class CreateValuationHandler : IRequestHandler<CreateValuationCommand, Response<bool>>
    {
        private readonly IBaseRepository<Valuation> _repositoryValuation;

        public CreateValuationHandler(IBaseRepository<Valuation> repositoryValuation)
        {
            _repositoryValuation = repositoryValuation ?? throw new ArgumentNullException(nameof(repositoryValuation));
        }

        public async Task<Response<bool>> Handle(CreateValuationCommand request, CancellationToken cancellationToken)
        {
            var valuations = new List<Valuation>();
            var secondaryId = Guid.NewGuid();
            foreach (var item in request.ValuationProperties)
            {
                valuations.Add(new Valuation()
                {
                    CreateAt = DateTime.Now,
                    CreateBy = request.CreateBy,
                    EmployeeId = request.EmployeeId,
                    LastUpdateAt = DateTime.Now,
                    LastUpdateBy = request.CreateBy,
                    Recommendation = request.Recommendation,
                    Notes = request.Notes,
                    SecondaryId = secondaryId,
                    BookDate = request.BookDate,
                    BookNo = request.BookNo,
                    ValuationDate = DateOnly.FromDateTime(DateTime.Now),
                    ValuationKey = item.ValuationKey,
                    ValuationPoints = item.ValuationPoints,
                    ValuationType = request.ValuationType
                });
            }
            if (!valuations.Any())
                return ErrorsMessage.FailOnCreate.ToErrorMessage(false);

            await _repositoryValuation.CreateRange(valuations, cancellationToken: cancellationToken);
            return SuccessMessage.Create.ToSuccessMessage(true);
        }
    }
}
