
namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.GetChangeDueDate;
public class GetChangeDueDateQuery : IRequest<Response<PagedResult<GetChangeDueDateViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}