namespace HRM.Hub.Application.Features.MovementHandlers.Queries.Dashboard;
public sealed record GetDashboardQuery : IRequest<Response<GetDashboardViewModel>>
{
    public int Take { get; set; }
    public int Skip { get; set; }
}