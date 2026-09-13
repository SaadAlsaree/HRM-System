namespace HRM.Hub.Domain.Entities;

public class Promotion : BaseEntity<Guid>
{
    public long? SentPromotionGroupId { get; set; }
    public int JobDegreeId { get; set; }
    public int JobCategoryId { get; set; }
    public DateOnly? DueDateDegree { get; set; }
    // Start of the current degree period — the stable base of the promotion calculation.
    // DueDateDegree holds the adjusted result of the last calculation, so it must never be used as the base again.
    // Null means "derive it on the next calculation" (from a manually entered DueDateDegree, else the hire date).
    public DateOnly? DegreeStartDate { get; set; }
    public DateOnly? DueDateCategory { get; set; }
    public DateOnly? LastAllowanceDate { get; set; }
    public bool StopPromotion { get; set; }
    public int? ServiceRecycle { get; set; }
    public string Note { get; set; } = string.Empty;
    public virtual Employees Employee { get; set; }
    public virtual PromotionGroup SentPromotionGroup { get; set; }
    public virtual JobDegree JobDegree { get; set; }
    public virtual JobCategory JobCategory { get; set; }
}
