using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class StudyExtensionOrderType : BaseEntity<int>
{
    public string Name { get; set; }

    

    public virtual ICollection<StudyLeaveExtension> StudyLeaveExtension { get; set; } = new List<StudyLeaveExtension>();
}
