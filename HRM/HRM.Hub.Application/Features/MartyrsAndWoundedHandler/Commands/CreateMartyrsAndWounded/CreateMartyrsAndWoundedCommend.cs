namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Commands.CreateMartyrsAndWounded;

public class CreateMartyrsAndWoundedCommend : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public HealthStatus HealthStatus { get; set; }
    public DateTime? EndDateOfService { get; set; }
    public DateTime? RetirementDate { get; set; }
    public DateOnly? DateOfDeath { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime AdministrativeOrderDate { get; set; }
    public bool IsPoliticallyDismissed { get; set; }
    public DateTime? DateOfMartyrdom { get; set; }
    public string Note { get; set; }
}