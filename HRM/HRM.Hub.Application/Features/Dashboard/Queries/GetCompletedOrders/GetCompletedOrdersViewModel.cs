namespace HRM.Hub.Application.Features.Dashboard.Queries.GetCompletedOrders;
public class GetCompletedOrdersViewModel
{
    public int CountOfOrders { get; set; }
    public string TeamName { get; set; }
    public Guid TeamId { get; set; }
    public DateOnly OnDate { get; set; }
}
