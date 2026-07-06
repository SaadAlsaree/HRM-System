using HRM.Hub.Domain.Common;
using MediatR;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboard
{
    public class GetPromotionDashboardQuery : IRequest<Response<GetPromotionDashboardViewModel>>
    {
        public int? Year { get; set; }
        public int? Month { get; set; }
    }
}
