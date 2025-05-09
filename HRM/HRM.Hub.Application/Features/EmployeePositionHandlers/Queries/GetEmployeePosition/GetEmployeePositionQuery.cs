namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeePosition;
public class GetEmployeePositionQuery :  IRequest<Response<PagedResult<GetEmployeePositionViewModel>>>,IPaginationQuery
{
    public EmployeePositionTypeEnum EmployeePositionType { get; set; }
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}