using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Commands.UpdateEmployeePosition;

public class UpdateEmployeePositionCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public Guid EmployeeId { get; set; }

    public string EndAssignedOrderNo { get; set; }
    public DateOnly? EndAssignedOrderDate { get; set; }
    public DateOnly? AssignedDate { get; set; }
    public DateOnly? AssignedOrderDate { get; set; }
    public string AssignedOrderNo { get; set; }

    public DateOnly? AdministrativeOrderDate { get; set; }
    public string AdministrativeOrderNo { get; set; }

    public int? DirectorateId { get; set; }

    public int? SubDirectorateId { get; set; }

    public int? DepartmentId { get; set; }

    public int? SectionId { get; set; }
    public int? UnitId { get; set; }
    public int? PositionId { get; set; }
    public string Note { get; set; }


}
