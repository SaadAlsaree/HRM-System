using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Directorates: BaseEntity<int>
{
    public string Name { get; set; }

    public string ShortKey { get; set; }

    
    public virtual ICollection<Departments> Departments { get; set; } = new List<Departments>();

    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();

    public virtual ICollection<Movements> MovementsFromDirectorate { get; set; } = new List<Movements>();

    public virtual ICollection<Movements> MovementsToDirectorate { get; set; } = new List<Movements>();

    public virtual ICollection<Sections> Sections { get; set; } = new List<Sections>();

    public virtual ICollection<SubDirectorates> SubDirectorates { get; set; } = new List<SubDirectorates>();

    public virtual ICollection<Units> Units { get; set; } = new List<Units>();
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();
}
