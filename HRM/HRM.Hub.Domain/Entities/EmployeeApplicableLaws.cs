using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class EmployeeApplicableLaws: BaseEntity<Guid>
{

    public Guid EmployeeId { get; set; }

    public int? LawId { get; set; }

    public string Note { get; set; }

    
    

    public virtual Employees Employee { get; set; }

    public virtual Laws Law { get; set; }
}
