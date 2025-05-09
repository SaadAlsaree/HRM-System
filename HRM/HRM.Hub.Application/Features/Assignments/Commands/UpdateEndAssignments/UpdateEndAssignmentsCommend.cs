using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.Assignments.Commands.UpdateEndAssignments;

public class UpdateEndAssignmentsCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public string EndOrderNo { get; set; }

    public DateOnly? EndOrderDate { get; set; }

    public DateOnly? EndReleaseOrderDate { get; set; }

    public string EndReleaseOrderNo { get; set; }

    public string EndHireNo { get; set; }

    public DateOnly? EndHireDate { get; set; }

    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
