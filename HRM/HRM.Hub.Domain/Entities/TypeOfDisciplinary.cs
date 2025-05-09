namespace HRM.Hub.Domain.Entities;

public class TypeOfDisciplinary : BaseEntity<int>
{
    public string Name { get; set; }

    public int CountOfDayDelay { get; set; }
    public virtual ICollection<EmployeeDisciplinary> EmployeeDisciplinary { get; set; } = new List<EmployeeDisciplinary>();
}
