namespace HRM.Hub.Application.Features.Valuations.Queries.GetByIdValuation;

public class GetByIdValuationHandler : IRequestHandler<GetByIdValuationQuery, Response<GetByIdValuationViewModel>>
{
    private readonly IBaseRepository<Valuation> _repository;

    public GetByIdValuationHandler(IBaseRepository<Valuation> repository)
    {
        _repository = repository;
    }

    public async Task<Response<GetByIdValuationViewModel>> Handle(GetByIdValuationQuery request,
        CancellationToken cancellationToken)
    {
        var result = await _repository.Query(filter: x => x.SecondaryId == request.SecondaryId &&
                                                          x.IsDeleted == false,
                include: inc => inc.Include(z => z.Employee))
            .GroupBy(x => x.SecondaryId).Select(item => new GetByIdValuationViewModel()
            {
                SecondaryId = item.Key,
                BookDate = item.FirstOrDefault().BookDate,
                BookNo = item.FirstOrDefault().BookNo,
                EmployeeId = item.FirstOrDefault().EmployeeId,
                FullName = item.FirstOrDefault().Employee.FullName,
                Recommendation = item.FirstOrDefault().Recommendation,
                ValuationType = item.FirstOrDefault().ValuationType,
                TotalPoint = item.Sum(z => z.ValuationPoints),
                ValuationProperties = item.Select(z => new ValuationPropertyById()
                {
                    ValuationKey = z.ValuationKey,
                    ValuationPoints = z.ValuationPoints
                }).ToList(),
                StatusName = item.FirstOrDefault().StatusId.GetDisplayName(),
                JobCode = item.FirstOrDefault().Employee.JobCode,
                LotNumber = item.FirstOrDefault().Employee.LotNumber,
                Status = item.FirstOrDefault().StatusId,
                Id = item.FirstOrDefault().Id
            }).FirstOrDefaultAsync(cancellationToken: cancellationToken);
        return result == null ? ErrorsMessage.NotFoundData.ToErrorMessage(result) : SuccessMessage.Get.ToSuccessMessage(result);
    }
}