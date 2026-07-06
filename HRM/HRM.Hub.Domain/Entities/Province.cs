using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Province : BaseEntity<int>
{
    public string Name { get; set; }

    public int? GovernorateId { get; set; }

    public virtual Governorate Governorate { get; set; }

    public virtual ICollection<Territory> Territories { get; set; } = new List<Territory>();
    
    public virtual ICollection<AddressInformation> AddressInformation { get; set; } = new List<AddressInformation>();
}
