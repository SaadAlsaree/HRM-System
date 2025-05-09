namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWounded;

public class GetMartyrsAndWoundedQuery :  IRequest<Response<PagedResult<GetMartyrsAndWoundedViewModel>>>,IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }

    public HealthStatus HealthStatus { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}
