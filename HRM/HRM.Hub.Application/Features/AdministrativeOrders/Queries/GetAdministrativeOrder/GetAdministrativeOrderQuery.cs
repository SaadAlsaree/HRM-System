namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrder;
public class GetAdministrativeOrderQuery: IRequest<Response<PagedResult<GetAdministrativeOrderViewModel>>>,IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}