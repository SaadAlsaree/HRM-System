using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.AdministrativeOrders.Commands.UpdateAdministrativeOrder;
public class UpdateAdministrativeOrderCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public string OrderNo { get; set; }
    public string BookTitle { get; set; }
    public DateOnly OrderDate { get; set; }
    public AdministrativeOrderEnum AdministrativeOrderType { get; set; }

    public Guid? LastUpdateBy { get; set; }
}