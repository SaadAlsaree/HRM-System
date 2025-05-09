using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class Movements: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public int? FromDirectorateId { get; set; }
    public int? FromSubDirectorateId { get; set; }
    public int? FromDepartmentId { get; set; }
    public int? FromSectionId { get; set; }
    public int? FromUniteId { get; set; }
    public int? ToDirectorateId { get; set; }
    public int? ToSubDirectorateId { get; set; }
    public int? ToDepartmentId { get; set; }
    public int? ToSectionId { get; set; }
    public int? ToUnitId { get; set; }
    public DateOnly? ReleaseOrderDate { get; set; }
    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public string Note { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual Departments FromDepartment { get; set; }

    public virtual Directorates FromDirectorate { get; set; }

    public virtual Sections FromSection { get; set; }

    public virtual SubDirectorates FromSubDirectorate { get; set; }

    public virtual Units FromUnite { get; set; }

    public virtual Departments ToDepartment { get; set; }

    public virtual Directorates ToDirectorate { get; set; }

    public virtual Sections ToSection { get; set; }

    public virtual SubDirectorates ToSubDirectorate { get; set; }

    public virtual Units ToUnit { get; set; }
}
