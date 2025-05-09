using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class TypeOfJob : BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<JobInformation> JobInformation { get; set; } = new List<JobInformation>();
}
