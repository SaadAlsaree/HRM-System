namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetBonusesAndPromotions;
public class GetBonusesAndPromotionsViewModel:BaseViewModel<Guid>
{
    public int CurrentJobDegreeId { get; set; }
    public string CurrentJobDegreeName { get; set; }
    public DateOnly? CurrentDueDateOfJobDegree { get; set; }
    public int CurrentJobCategoryId { get; set; }
    public string CurrentJobCategoryName { get; set; }
    public DateOnly? CurrentDueDateOfJobCategory { get; set; }
    public int NewJobDegreeId { get; set; }
    public string NewJobDegreeName { get; set; }
    public DateOnly? NewDueDateOfJobDegree { get; set; }
    public int NextIndexJobDegree { get; set; }
    public int NewJobCategoryId { get; set; }
    public string NewJobCategoryName { get; set; }
    public DateOnly? NewDueDateOfJobCategory { get; set; }
    public int NextIndexJobCategory { get; set; }
    public int JobTitleId { get; set; }
    public string JobTitleName { get; set; }
    public string Notes { get; set; }
}