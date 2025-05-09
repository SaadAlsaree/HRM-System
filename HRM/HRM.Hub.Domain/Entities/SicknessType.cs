using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class SicknessType : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>();
}
