using HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrder;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotion;
public class GetPromotionQuery: IRequest<Response<PagedResult<GetPromotionViewModel>>>,IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}