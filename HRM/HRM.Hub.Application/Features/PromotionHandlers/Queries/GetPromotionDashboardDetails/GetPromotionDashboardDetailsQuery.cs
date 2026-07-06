using System;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using MediatR;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboardDetails
{
    public enum DashboardFilterType
    {
        None = 0,
        DueThisMonth = 1,
        Completed = 2,
        Pending = 3,
        Overdue = 4,
        Withheld = 5,
        MissingEvaluations = 6
    }

    public class GetPromotionDashboardDetailsQuery : IRequest<Response<PagedResult<GetPromotionDashboardDetailsViewModel>>>, IPaginationQuery
    {
        public int? Year { get; set; }
        public int? Month { get; set; }
        public DashboardFilterType FilterType { get; set; } = DashboardFilterType.None;
        
        public int Page { get; set; } = 1;
        public byte PageSize { get; set; } = 10;
    }
}
