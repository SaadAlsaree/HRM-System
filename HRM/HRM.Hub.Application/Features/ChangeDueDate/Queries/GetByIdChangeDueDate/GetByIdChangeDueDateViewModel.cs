namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.GetByIdChangeDueDate;
public class GetByIdChangeDueDateViewModel : BaseViewModel<Guid>
{
    public DateOnly CurrentDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly CurrentCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string Note { get; set; }
}