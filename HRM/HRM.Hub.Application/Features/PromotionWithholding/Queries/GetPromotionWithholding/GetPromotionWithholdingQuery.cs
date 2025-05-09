namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetPromotionWithholding;

public class GetPromotionWithholdingQuery : IRequest<Response<PagedResult<GetPromotionWithholdingViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
