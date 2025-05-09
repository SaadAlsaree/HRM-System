namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignations;
public class GetResignationQuery : IRequest<Response<PagedResult<GetResignationViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public string NameTerm { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}