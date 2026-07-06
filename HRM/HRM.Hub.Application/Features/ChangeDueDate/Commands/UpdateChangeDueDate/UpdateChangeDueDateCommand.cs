namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.UpdateChangeDueDate;
public class UpdateChangeDueDateCommand : IRequest<Response<bool>>
{
    [JsonIgnore]
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
