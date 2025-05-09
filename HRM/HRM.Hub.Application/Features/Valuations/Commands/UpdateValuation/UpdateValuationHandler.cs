namespace HRM.Hub.Application.Features.Valuations.Commands.UpdateValuation
{
    public class UpdateValuationHandler : IRequestHandler<UpdateValuationCommand, Response<bool>>
    {
        private readonly IBaseRepository<Valuation> _repositoryValuation;

        public UpdateValuationHandler(IBaseRepository<Valuation> repositoryValuation)
        {
            _repositoryValuation = repositoryValuation ?? throw new ArgumentNullException(nameof(repositoryValuation));
        }

        public async Task<Response<bool>> Handle(UpdateValuationCommand request, CancellationToken cancellationToken)
        {
            var get = await _repositoryValuation.Query(x=>x.EmployeeId == request.EmployeeId && x.SecondaryId == request.SecondaryId).ToListAsync(cancellationToken: cancellationToken);

            if (get == null)
                return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

            foreach (var item in get)
            {
                var proprty = request.ValuationProperties.FirstOrDefault(z => z.ValuationKey == item.ValuationKey);
                if (proprty == null) continue;
                item.ValuationPoints = proprty.ValuationPoints;
                item.LastUpdateBy = request.LastUpdateBy;
                item.Recommendation = request.Recommendation;
                item.LastUpdateAt = DateTime.Now;
                item.Notes = request.Notes;
                item.BookNo = request.BookNo;
                item.BookDate = request.BookDate;
                item.ValuationType = request.ValuationType;
            }
            await _repositoryValuation.UpdateRange(get, cancellationToken: cancellationToken);

            return SuccessMessage.Update.ToSuccessMessage(true);
        }
    }
}
