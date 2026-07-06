namespace HRM.Hub.Domain.Entities;

public class LeavesBalance : BaseEntity<Guid>
{
    public int? Balance { get; set; }
    public int AnnualBalance { get; set; }
    public int CarriedOverBalance { get; set; }
    public int EarnedBalance { get; set; }
    public int UsedBalance { get; set; }
    public int RemainingBalance => AnnualBalance + CarriedOverBalance + EarnedBalance - UsedBalance;
    public string Note { get; set; } = string.Empty;
    public virtual Employees Employee { get; set; }
}
