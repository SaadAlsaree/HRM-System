using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class ServiceCalculation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int TypeOfServiceId { get; set; }

    public int? CountOfMonth { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public bool? IsPoliticalTermination { get; set; }

    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }

    public virtual TypeOfService TypeOfService { get; set; }
}
