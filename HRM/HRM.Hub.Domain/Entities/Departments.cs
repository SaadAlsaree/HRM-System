namespace HRM.Hub.Domain.Entities;

public class Departments : BaseEntity<int>
{
    public int? DirectorateId { get; set; }

    public int? SubDirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }


    public virtual Directorates Directorate { get; set; }

    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<Movements> MovementsFromDepartment { get; set; } = new List<Movements>();

    public virtual ICollection<Movements> MovementsToDepartment { get; set; } = new List<Movements>();

    public virtual ICollection<Sections> Sections { get; set; } = new List<Sections>();

    public virtual SubDirectorates SubDirectorate { get; set; }
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();

    public virtual ICollection<Units> Units { get; set; } = new List<Units>();
}
