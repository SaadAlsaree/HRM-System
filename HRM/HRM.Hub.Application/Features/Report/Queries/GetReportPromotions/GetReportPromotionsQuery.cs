using System.ComponentModel.DataAnnotations;

namespace HRM.Hub.Application.Features.Report.Queries.GetReportPromotions;
public class GetReportPromotionsQuery:IRequest<PagedResult<GetReportPromotionsViewModel>>,IPaginationQuery
{
    public Guid EmoloyeeId { get; set; }
    [Required]
    public DateOnly FromdueDate { get; set; }
    [Required]
    public DateOnly ToDueDate { get; set; }
    public int Page { get ; set ; }
    public byte PageSize { get ; set ; }
}
