namespace HRM.Hub.Application.Features.AdministrativeOrders.Commands.AddAdministrativeOrder;
public class AddAdministrativeOrderCommand:IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public string BookTitle { get; set; }
    public DateOnly OrderDate { get; set; }
    public AdministrativeOrderEnum AdministrativeOrderType { get; set; }
    public Guid? CreateBy { get; set; }
}