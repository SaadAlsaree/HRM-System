namespace HRM.Hub.Domain.Entities;

public class Laws : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<EmployeeApplicableLaws> EmployeeApplicableLaws { get; set; } = new List<EmployeeApplicableLaws>();
    public virtual ICollection<PromotionAllowanceRule> PromotionAllowanceRules { get; set; } = new List<PromotionAllowanceRule>();
    public virtual ICollection<AnnualAllowanceRule> AnnualAllowanceRules { get; set; } = new List<AnnualAllowanceRule>();
}
