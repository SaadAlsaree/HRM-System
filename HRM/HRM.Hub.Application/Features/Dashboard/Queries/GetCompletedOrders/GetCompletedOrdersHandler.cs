
namespace HRM.Hub.Application.Features.Dashboard.Queries.GetCompletedOrders;
public class GetCompletedOrdersQuery: IRequest<Response<IEnumerable<GetCompletedOrdersViewModel>>>
{
}
public class GetCompletedOrdersHandler : IRequestHandler<GetCompletedOrdersQuery, Response<IEnumerable<GetCompletedOrdersViewModel>>>
{
    private readonly IBaseRepository<CompletedOrders> _repositoryCompletedOrder;
    public GetCompletedOrdersHandler(IBaseRepository<CompletedOrders> repositoryCompletedOrder)
    {
        _repositoryCompletedOrder = repositoryCompletedOrder ?? throw new ArgumentNullException(nameof(repositoryCompletedOrder));
    }
    public async Task<Response<IEnumerable<GetCompletedOrdersViewModel>>> Handle(GetCompletedOrdersQuery request, CancellationToken cancellationToken)
    {
        var get =await _repositoryCompletedOrder.Query().Where( x=>x.OnDate.Year == DateTime.Now.Year).Select(x => new GetCompletedOrdersViewModel
        {
            CountOfOrders = x.CountOfOrders,
            TeamName = x.TeamName,
            TeamId = x.TeamId,
            OnDate = x.OnDate
        }).ToListAsync(cancellationToken: cancellationToken);
        if (get == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<IEnumerable<GetCompletedOrdersViewModel>>(null);
        return SuccessMessage.Get.ToSuccessMessage<IEnumerable<GetCompletedOrdersViewModel>>(get);
    }
}
