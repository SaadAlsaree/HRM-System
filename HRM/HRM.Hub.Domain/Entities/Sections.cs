using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Sections : BaseEntity<int>
{
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public int DepartmentId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }



    public virtual Departments Department { get; set; }

    public virtual Directorates Directorate { get; set; }

    public virtual ICollection<Movements> MovementsFromSection { get; set; } = new List<Movements>();

    public virtual ICollection<Movements> MovementsToSection { get; set; } = new List<Movements>();

    public virtual SubDirectorates SubDirectorate { get; set; }

    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();
    public virtual ICollection<Units> Units { get; set; } = new List<Units>();
}
