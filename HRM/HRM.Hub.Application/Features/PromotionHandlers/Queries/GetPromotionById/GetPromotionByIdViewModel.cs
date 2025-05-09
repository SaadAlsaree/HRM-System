namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionById;

public class GetPromotionByIdViewModel:BaseViewModel<Guid>
{

    public long? SentPromotionGroupId { get; set; }
    public string SentPromotionGroupName { get; set; }

    public int? DegreeFromId { get; set; }
    public string DegreeFromName { get; set; }

    public int? DegreeToId { get; set; }
    public string DegreeToName { get; set; }

    public int? JobCategoryFromId { get; set; }
    public string JobCategoryFromName { get; set; }

    public int? JobCategoryToId { get; set; }
    public string JobCategoryToName { get; set; }

    public Guid? OldEducationInformationId { get; set; }
    public string OldEducationInformationName { get; set; }

    public Guid? NewEducationInformationId { get; set; }
    public string NewEducationInformationName { get; set; }
    public DateOnly? DueDateDegree { get; set; }

    public DateOnly? DueDateCategory { get; set; }

    public string BookNo { get; set; }

    public DateOnly? BookDate { get; set; }

    public int? CategoryPerMonth { get; set; }

    public int? ServiceRecycle { get; set; }

    public int? TypeOfChange { get; set; }
    public string Note { get; set; }
}