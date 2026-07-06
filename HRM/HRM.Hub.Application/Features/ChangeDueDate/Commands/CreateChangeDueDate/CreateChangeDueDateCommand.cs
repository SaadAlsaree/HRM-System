namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.CreateChangeDueDate;
public class CreateChangeDueDateCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
    public Guid? CreateBy { get; set; }
}
