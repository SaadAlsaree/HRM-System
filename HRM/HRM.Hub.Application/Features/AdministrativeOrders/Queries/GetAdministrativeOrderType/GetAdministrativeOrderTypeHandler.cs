namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrderType;
public class GetAdministrativeOrderTypeQuery : IRequest<Response<Dictionary<string, string>>>
{
    public Guid EmployeeId { get; set; }
}
public class GetAdministrativeOrderTypeHandler : IRequestHandler<GetAdministrativeOrderTypeQuery, Response<Dictionary<string, string>>>
{
    private readonly IBaseRepository<AdministrativeOrder> _repositoryAdministrativeOrders;
    public GetAdministrativeOrderTypeHandler(IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrders)
    {
        _repositoryAdministrativeOrders = repositoryAdministrativeOrders ?? throw new ArgumentNullException(nameof(repositoryAdministrativeOrders));
    }
    public async Task<Response<Dictionary<string, string>>> Handle(GetAdministrativeOrderTypeQuery request, CancellationToken cancellationToken)
    {
        var (get, count) = await _repositoryAdministrativeOrders.GetAsync<AdministrativeOrder>(x => x.EmployeeId == request.EmployeeId && x.StatusId == Status.Active, cancellationToken: cancellationToken);
       
        return SuccessMessage.Get.ToSuccessMessage<Dictionary<string, string>>(null);
    }
}