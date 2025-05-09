namespace HRM.Hub.Domain.Entities;

public class Units : BaseEntity<int>
{
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public int DepartmentId { get; set; }

    public int SectionId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }

    public virtual Departments Department { get; set; }

    public virtual Directorates Directorate { get; set; }

    public virtual ICollection<Movements> MovementsFromUnite { get; set; } = new List<Movements>();

    public virtual ICollection<Movements> MovementsToUnit { get; set; } = new List<Movements>();

    public virtual Sections Section { get; set; }

    public virtual SubDirectorates SubDirectorate { get; set; }
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();
}
