namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.UpdateChangeDueDate;
public class UpdateChangeDueDateCommand : IRequest<Response<bool>>
{
    [JsonIgnore]
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly CurrentDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly CurrentCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}