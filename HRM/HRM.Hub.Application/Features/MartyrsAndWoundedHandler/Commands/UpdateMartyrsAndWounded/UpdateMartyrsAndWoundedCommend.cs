using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Commands.UpdateMartyrsAndWounded;

public class UpdateMartyrsAndWoundedCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? DateOfDeath { get; set; }
    public Guid? EmployeePositionId { get; set; }
    public DateTime? EndDateOfService { get; set; }
    public DateTime? RetirementDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime AdministrativeOrderDate { get; set; }
    public bool IsPoliticallyDismissed { get; set; }
    public DateTime? DateOfMartyrdom { get; set; }
    public string Note { get; set; }
    public HealthStatus HealthStatus { get; set; }


}
