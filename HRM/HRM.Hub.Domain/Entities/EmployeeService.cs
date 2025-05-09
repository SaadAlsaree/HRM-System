namespace HRM.Hub.Domain.Entities;

public class EmployeeService: BaseEntity<Guid>
{
    public string RetirementCalculation { get; set; }
    public string PromotionCalculation { get; set; }
    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }
}
