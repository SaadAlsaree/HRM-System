namespace HRM.Hub.Application.Features.ChangeDegree.Queries.GetChangeDegree;
public class GetChangeDegreeViewModel : BaseViewModel<Guid>
{
    public int JobDegreeFromId { get; set; }
    public string JobDegreeFromName { get; set; }
    public int JobDegreeToId { get; set; }
    public string JobDegreeToName { get; set; }
    public int JobCategoryFromId { get; set; }
    public string JobCategoryFromName { get; set; }
    public int JobCategoryToId { get; set; }
    public string JobCategoryToName { get; set; }
    public int JobTitleFromId { get; set; }
    public string JobTitleFromName { get; set; }
    public int JobDescriptionFromId { get; set; }
    public string JobDescriptionFromName { get; set; }
    public int JobTitleToId { get; set; }
    public string JobTitleToName { get; set; }
    public int JobDescriptionToId { get; set; }
    public string JobDescriptionToName { get; set; }
    public DateOnly OldDegreeDueDate { get; set; }
    public DateOnly NewDegreeDueDate { get; set; }
    public DateOnly OldCategoryDueDate { get; set; }
    public DateOnly NewCategoryDueDate { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }
}