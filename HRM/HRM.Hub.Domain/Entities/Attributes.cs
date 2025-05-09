using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Attributes: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public string AttributeKey { get; set; }

    public string AttributeValue { get; set; }
    public virtual Employees Employee { get; set; }
}
