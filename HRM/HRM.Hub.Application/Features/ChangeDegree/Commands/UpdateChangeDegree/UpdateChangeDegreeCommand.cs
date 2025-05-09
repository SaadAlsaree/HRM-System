namespace HRM.Hub.Application.Features.ChangeDegree.Commands.UpdateChangeDegree;
public class UpdateChangeDegreeCommand : IRequest<Response<bool>>
{
    [JsonIgnore]
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public int JobDegreeFromId { get; set; }
    public int JobDegreeToId { get; set; }
    public int JobCategoryFromId { get; set; }
    public int JobCategoryToId { get; set; }
    public int JobTitleFromId { get; set; }
    public int JobDescriptionFromId { get; set; }
    public int JobTitleToId { get; set; }
    public int JobDescriptionToId { get; set; }
    public DateOnly OldDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly OldCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }

    public Guid? LastUpdateBy { get; set; }
}