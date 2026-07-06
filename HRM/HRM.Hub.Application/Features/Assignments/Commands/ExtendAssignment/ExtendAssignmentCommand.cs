using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.Assignments.Commands.ExtendAssignment;

public class ExtendAssignmentCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public int AdditionalMonths { get; set; }
    public DateOnly? ExtensionDate { get; set; }
    public string ExtensionReason { get; set; }
    public Guid? ExtendedBy { get; set; }
    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
