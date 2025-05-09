
namespace HRM.Hub.Application.Features.Valuations.Queries.GetValuations;
public class GetValuationsHandler: IRequestHandler<GetValuationsQuery, Response<PagedResult<GetValuationsViewModel>>>
{
    private readonly IBaseRepository<Valuation> _repository;
    public GetValuationsHandler(IBaseRepository<Valuation> repository)
    {
        _repository = repository;
    }
    public async Task<Response<PagedResult<GetValuationsViewModel>>> Handle(GetValuationsQuery request, CancellationToken cancellationToken)
    {
        var query = _repository.Query(filter: x => (request.EmployeeId == default || x.EmployeeId == request.EmployeeId) &&
                            x.IsDeleted == false, include: inc => inc.Include(z => z.Employee))
                            .OrderByDescending(x => x.CreateAt)
                            .GroupBy(x => x.SecondaryId).Select(item => new GetValuationsViewModel()
                            {
                                SecondaryId = item.Key,
                                BookDate = item.FirstOrDefault().BookDate,
                                BookNo = item.FirstOrDefault().BookNo,
                                EmployeeId = item.FirstOrDefault().EmployeeId,
                                FullName = item.FirstOrDefault().Employee.FullName,
                                Recommendation = item.FirstOrDefault().Recommendation,
                                ValuationType = item.FirstOrDefault().ValuationType,
                                TotalPoint = item.Sum(z=>z.ValuationPoints),
                                StatusName = item.FirstOrDefault().StatusId.GetDisplayName(),
                                JobCode = item.FirstOrDefault().Employee.JobCode,
                                LotNumber = item.FirstOrDefault().Employee.LotNumber,
                                Status = item.FirstOrDefault().StatusId,
                                Id = item.FirstOrDefault().Id
                            }).AsQueryable();
        PagedResult<GetValuationsViewModel> result = new PagedResult<GetValuationsViewModel>()
        {
            Items =await query.Skip((request.Page - 1) * request.PageSize).Take(request.PageSize).ToListAsync(cancellationToken: cancellationToken),
            TotalCount = await query.CountAsync(cancellationToken: cancellationToken)
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}