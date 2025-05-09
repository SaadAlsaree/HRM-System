namespace HRM.Hub.Domain.Entities;

public class Valuation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public Guid SecondaryId { get; set; }

    public DateOnly? ValuationDate { get; set; }

    public string ValuationKey { get; set; }
    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }

    public int? ValuationPoints { get; set; }

    public string Recommendation { get; set; }

    public string ValuationType { get; set; }

    public string Notes { get; set; }

    public virtual Employees Employee { get; set; }
}
