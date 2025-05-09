using System;
using System.Collections.Generic;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class PromotionGroup: BaseEntity<long>
{
    public string GroupName { get; set; }

    public DateOnly? GroupSendDate { get; set; }

    public DateOnly? GroupDoneDate { get; set; }

    public int? CountEmployee { get; set; }

    public string Notes { get; set; }

    public virtual ICollection<Promotion> Promotion { get; set; } = new List<Promotion>();
}
