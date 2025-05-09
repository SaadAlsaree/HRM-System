using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class EmployeePosition : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public EmployeePositionTypeEnum EmployeePositionType { get; set; }
    public string EndAssignedOrderNo { get; set; }
    public DateOnly? EndAssignedOrderDate { get; set; }

    public DateOnly? AssignedOrderDate { get; set; }
    public DateOnly? AssignedDate { get; set; }
    public string AssignedOrderNo { get; set; }

    public DateOnly? AdministrativeOrderDate { get; set; }
    public string AdministrativeOrderNo { get; set; }

    public int? DirectorateId { get; set; }

    public int? SubDirectorateId { get; set; }

    public int? DepartmentId { get; set; }

    public int? SectionId { get; set; }
    public int? UnitId { get; set; }
    public int? PositionId { get; set; }
    public Status? Status { get; set; }
    public string Note { get; set; } = string.Empty;

    public virtual Directorates Directorate { get; set; }
    public virtual SubDirectorates SubDirectorate { get; set; }
    public virtual Departments Department { get; set; }
    public virtual Sections Section { get; set; }
    public virtual Units Unit { get; set; }
    public virtual Position Position { get; set; }
    public virtual Employees Employee { get; set; }
}