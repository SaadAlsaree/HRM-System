namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployee;
public class GetEmployeeQuery : IRequest<Response<PagedResult<GetEmployeeViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int TypeOfJobId { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}