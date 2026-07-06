
namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliations;

public class GetAffiliationsQuery : IRequest<Response<PagedResult<GetAffiliationsViewModel>>>, IPaginationQuery
{
    public AffiliationSite AssignmentSite { get; set; }
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
    public string SearchTerm { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
