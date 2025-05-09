using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class PreciseAcademicField : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();
}
