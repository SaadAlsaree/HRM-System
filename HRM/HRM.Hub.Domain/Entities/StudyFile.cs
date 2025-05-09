using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class StudyFile : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public string DocumentNo { get; set; }

    public DateOnly? DocumentDate { get; set; }

    public string Notes { get; set; }
    public virtual Employees Employee { get; set; }

    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();
    public virtual ICollection<StudyLeaveExtension> StudyLeaveExtension { get; set; } = new List<StudyLeaveExtension>();
}
