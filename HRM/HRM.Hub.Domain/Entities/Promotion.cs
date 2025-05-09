namespace HRM.Hub.Domain.Entities;

public class Promotion: BaseEntity<Guid>
{
    public long? SentPromotionGroupId { get; set; }
    public int JobDegreeId { get; set; }
    public int JobCategoryId { get; set; }
    public DateOnly? DueDateDegree { get; set; }
    public DateOnly? DueDateCategory { get; set; }
    public bool StopPromotion { get; set; }
    public int? ServiceRecycle { get; set; }
    public string Note { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual PromotionGroup SentPromotionGroup { get; set; }
    public virtual JobDegree JobDegree { get; set; }
    public virtual JobCategory JobCategory { get; set; }
}
