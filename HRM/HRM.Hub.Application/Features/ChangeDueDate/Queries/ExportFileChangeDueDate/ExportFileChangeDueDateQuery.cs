namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.ExportFileChangeDueDate;
public class ExportFileChangeDueDateQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}
