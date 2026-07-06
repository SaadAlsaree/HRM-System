using System.ComponentModel.DataAnnotations;
using HRM.Hub.Application.Helper.Pagination;
using HRM.Hub.Domain.Common.Enums;
using MediatR;

namespace HRM.Hub.Application.Features.PromotionReport.Queries.GetReportPromotions;
public class GetReportPromotionsQuery : IRequest<Response<PagedResult<GetReportPromotionsViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int DegreeId { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; } = 10;
}
