namespace HRM.Hub.Domain.Entities;

public class ThanksAndSeniorityCalculation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int CountOfMonths { get; set; }
}
