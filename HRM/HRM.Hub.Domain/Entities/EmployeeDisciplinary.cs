namespace HRM.Hub.Domain.Entities;

public class EmployeeDisciplinary: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string TitleOfBook { get; set; }
    public int TypeOfDisciplinaryId { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public bool? StopPromotion { get; set; }
    public int? CountOfDayDelay { get; set; }
    public string DisciplinaryLaw { get; set; }
    public string Note { get; set; }
    public string Reason { get; set; }
    public virtual TypeOfDisciplinary TypeOfDisciplinary { get; set; }
    public virtual Employees Employee { get; set; }
}
