namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeService;
public class GetEmployeeServiceQuery : IRequest<Response<PagedResult<GetEmployeeServiceViewModel>>>, IPaginationQuery
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}