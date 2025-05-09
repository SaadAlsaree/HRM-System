namespace HRM.Hub.Domain.Entities;

public class SubDirectorates : BaseEntity<int>
{
    public int? DirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }



    public virtual ICollection<Departments> Departments { get; set; } = new List<Departments>();

    public virtual Directorates Directorate { get; set; }

    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<Movements> MovementsFromSubDirectorate { get; set; } = new List<Movements>();

    public virtual ICollection<Movements> MovementsToSubDirectorate { get; set; } = new List<Movements>();

    public virtual ICollection<Sections> Sections { get; set; } = new List<Sections>();
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();

    public virtual ICollection<Units> Units { get; set; } = new List<Units>();
}
