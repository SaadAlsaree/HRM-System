namespace HRM.Hub.Domain.Entities;

public class Absence : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public DateOnly? AbsenceDate { get; set; }

    public string BookNo { get; set; }
    public int CountOfDays { get; set; }

    public string AbsenceOrderNo { get; set; } = string.Empty;
    public DateOnly? AbsenceOrderDate { get; set; }
    public string ReturnOrderNo { get; set; } = string.Empty;
    public DateOnly? ReturnOrderDate { get; set; }

    public DateOnly? BookDate { get; set; }

    public string Note { get; set; }


    public virtual Employees Employee { get; set; }
}