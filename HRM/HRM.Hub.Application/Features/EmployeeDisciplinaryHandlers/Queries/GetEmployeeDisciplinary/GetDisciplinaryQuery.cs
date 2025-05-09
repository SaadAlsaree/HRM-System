namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.GetEmployeeDisciplinary;
public class GetDisciplinaryQuery : IRequest<Response<PagedResult<GetDisciplinaryViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Guid Id { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}