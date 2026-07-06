namespace HRM.Hub.Domain.Entities;

public class TypeOfLeave : BaseEntity<int>
{
    public string Name { get; set; }
    public string? Description { get; set; }
    public int? MaxDurationDays { get; set; }
    public bool RequiresAdministrativeOrder { get; set; }
    public bool RequiresApprovals { get; set; }
    public bool AffectsService { get; set; }
    public bool AffectsPromotion { get; set; }
    public bool AffectsBonus { get; set; }
    public bool AffectsSalary { get; set; }
    public bool AffectsRetirement { get; set; }
    public bool AllowsExtension { get; set; }
    public bool AllowsTermination { get; set; }
    public bool AllowsCarryover { get; set; }
    public bool CountsTowardsAnnualBalance { get; set; }
    public bool IsBalanceBased { get; set; } = true;
    public int? MaxCarryoverDays { get; set; }
    public Common.Enums.SalaryStatus DefaultSalaryStatusId { get; set; } = Common.Enums.SalaryStatus.NotSpecified;

    public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>();
}
