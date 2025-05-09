using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Country : BaseEntity<int>
{
    public string Name { get; set; }

    public virtual ICollection<Employees> Employees { get; set; } = new List<Employees>();
    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
    public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>(); 
    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();
}
