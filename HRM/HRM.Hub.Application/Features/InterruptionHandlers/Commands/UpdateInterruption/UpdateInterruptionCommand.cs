namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.UpdateInterruption;
public sealed record UpdateInterruptionCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public DateTime? NotificationDate { get; set; }
    public string Reason { get; set; }
    public string Note { get; set; }
    public Status Status { get; set; }
    public Guid? LastUpdateBy { get; set; }
}