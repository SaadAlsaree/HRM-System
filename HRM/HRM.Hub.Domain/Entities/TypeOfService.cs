using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class TypeOfService : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<ServiceCalculation> ServiceCalculation { get; set; } = new List<ServiceCalculation>();
}
