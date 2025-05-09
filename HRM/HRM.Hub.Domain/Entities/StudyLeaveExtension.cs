using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class StudyLeaveExtension: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public Guid? StudyFileId { get; set; }
    public int? StudyExtensionOrderTypeId { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public DateOnly? FromDate { get; set; }
    public int CountOfDay { get; set; }

    public DateOnly? ToDate { get; set; }

    public string Notes { get; set; }



    public virtual StudyFile StudyFile { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual StudyExtensionOrderType StudyExtensionOrderType { get; set; }
}
