using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class MarriageInformation: BaseEntity<Guid>
{
    public Guid? EmployeeId { get; set; }

    public string FirstName { get; set; }

    public string SecondName { get; set; }

    public string ThirdName { get; set; }

    public string SurName { get; set; }

    public string FullName { get; set; }

    public DateOnly? MarriageDate { get; set; }

    public int? ChildrenCount { get; set; }

    public string Notes { get; set; }
    
    public bool IsCurrent { get; set; }

    

    

    public virtual Employees Employee { get; set; }
}
