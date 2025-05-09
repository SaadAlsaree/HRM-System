using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Commands.CreateEmployeePosition;

public class CreateEmployeePositionCommend : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public EmployeePositionTypeEnum EmployeePositionType { get; set; }

    public DateOnly? AssignedOrderDate { get; set; }
    public string AssignedOrderNo { get; set; }
    public DateOnly? AssignedDate { get; set; }
    public DateOnly? AdministrativeOrderDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public int? DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public int? DepartmentId { get; set; }
    public int? SectionId { get; set; }
    public int? UnitId { get; set; }
    public int? PositionId { get; set; }
    public string Note { get; set; } = string.Empty;
    public List<OldEmployeePosition> CurrentPosition { get; set; } = new List<OldEmployeePosition>();
}
public class OldEmployeePosition
{
    public Guid Id { get; set; }
    public string EndAssignedOrderNo { get; set; }
    public DateOnly? EndAssignedOrderDate { get; set; }
}