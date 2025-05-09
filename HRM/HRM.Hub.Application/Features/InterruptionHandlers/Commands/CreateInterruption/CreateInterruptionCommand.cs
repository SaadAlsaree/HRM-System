namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.CreateInterruption;
public sealed record CreateInterruptionCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public DateTime? NotificationDate { get; set; }
    public string Reason { get; set; }
    public string Note { get; set; }
    public Guid? CreateBy { get; set; }
}