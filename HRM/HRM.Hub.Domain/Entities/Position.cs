using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Position : BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<ManagementInformation> ManagementInformation { get; set; } = new List<ManagementInformation>();
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();
}
