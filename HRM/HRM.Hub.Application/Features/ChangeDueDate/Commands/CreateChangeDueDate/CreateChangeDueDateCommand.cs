namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.CreateChangeDueDate;
public class CreateChangeDueDateCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public DateOnly CurrentDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly CurrentCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
    public Guid? CreateBy { get; set; }
}