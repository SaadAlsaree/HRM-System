using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class TypeOfBook : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<ThanksAndSeniority> ThanksAndSeniority { get; set; } = new List<ThanksAndSeniority>();
}
