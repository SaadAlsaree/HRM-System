namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetAllJobInformations;
public class GetAllJobInformationsQuery : IRequest<Response<PagedResult<GetAllJobInformationsViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}