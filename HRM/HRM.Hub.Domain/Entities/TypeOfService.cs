using System;
using System.Collections.Generic;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class TypeOfService : BaseEntity<int>
{
    public string Name { get; set; }
    public ServiceEffectAction EffectAction { get; set; }
    public PromotionAllowanceEffectScope EffectScope { get; set; }

    public virtual ICollection<ServiceCalculation> ServiceCalculation { get; set; } = new List<ServiceCalculation>();
}
