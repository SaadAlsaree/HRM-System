namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetBonusesAndPromotions;
public class GetBonusesAndPromotionsQuery : IRequest<Response<PagedResult<GetBonusesAndPromotionsViewModel>>>, IPaginationQuery
{
    public int CountOfEmployee { get; set; }
    public DateOnly FromDate { get; set; }
    public DateOnly ToDate { get; set; }
    public int TypeOfPromotions { get; set; }
    public int DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public int? DepartmentId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
}