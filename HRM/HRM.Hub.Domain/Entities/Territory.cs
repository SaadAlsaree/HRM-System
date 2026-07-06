using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Territory : BaseEntity<int>
{
    public string Name { get; set; }

    public int? ProvinceId { get; set; }

    public virtual Province Province { get; set; }
    
    public virtual ICollection<AddressInformation> AddressInformation { get; set; } = new List<AddressInformation>();
}
