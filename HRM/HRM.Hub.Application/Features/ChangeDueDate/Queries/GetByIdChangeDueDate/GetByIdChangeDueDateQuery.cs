namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.GetByIdChangeDueDate;
public class GetByIdChangeDueDateQuery : IRequest<Response<GetByIdChangeDueDateViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}
