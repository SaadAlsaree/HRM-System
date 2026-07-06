namespace HRM.Hub.Domain.Entities;

public class PromotionAllowanceCalculationRun : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string Trigger { get; set; } = string.Empty;
    public DateOnly? PromotionBaseDate { get; set; }
    public int? PromotionBaseMonths { get; set; }
    public DateOnly? PromotionDueDate { get; set; }
    public DateOnly? AllowanceBaseDate { get; set; }
    public int? AllowanceBaseMonths { get; set; }
    public DateOnly? AllowanceDueDate { get; set; }
    public string Summary { get; set; } = string.Empty;

    public virtual Employees Employee { get; set; }
    public virtual ICollection<PromotionAllowanceCalculationDetail> Details { get; set; } = new List<PromotionAllowanceCalculationDetail>();
}
