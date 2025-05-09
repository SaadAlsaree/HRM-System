using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class TypeOfAssignment : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<Assignments> Assignments { get; set; } = new List<Assignments>();
}
