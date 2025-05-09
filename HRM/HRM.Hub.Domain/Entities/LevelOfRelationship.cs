using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class LevelOfRelationship : BaseEntity<int>
{
    public string Name { get; set; }
    public virtual ICollection<ContactInformation> ContactInformation { get; set; } = new List<ContactInformation>();
}
