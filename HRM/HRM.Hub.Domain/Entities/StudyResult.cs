using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class StudyResult : BaseEntity<int>
{
    public string Name { get; set; }

    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
}
