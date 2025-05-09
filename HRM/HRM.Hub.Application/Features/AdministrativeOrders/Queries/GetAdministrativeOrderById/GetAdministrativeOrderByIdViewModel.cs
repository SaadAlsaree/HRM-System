namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrderById;

public class GetAdministrativeOrderByIdViewModel:BaseViewModel<Guid>
{
    public string OrderNo { get; set; }
    public string BookTitle { get; set; }
    public DateOnly OrderDate { get; set; }
    public AdministrativeOrderEnum AdministrativeOrderType { get; set; }
    public string AdministrativeOrderTypeName { get; set; }
}