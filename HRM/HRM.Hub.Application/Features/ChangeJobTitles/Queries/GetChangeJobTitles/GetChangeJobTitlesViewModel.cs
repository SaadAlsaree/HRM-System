namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.GetChangeJobTitles;
public class GetChangeJobTitlesViewModel: BaseViewModel<Guid>
{
    public int? NewJobTitleId { get; set; }
    public string NewJobTitleName { get; set; }
    public int? NewJobDescriptionId { get; set; }
    public string NewJobDescriptionName { get; set; }
    public int? OldJobTitleId { get; set; }
    public string OldJobTitleName { get; set; }
    public int? OldJobDescriptionId { get; set; }
    public string OldJobDescriptionName { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }
}
