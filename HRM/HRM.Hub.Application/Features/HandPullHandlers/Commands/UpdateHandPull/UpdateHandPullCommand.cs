namespace HRM.Hub.Application.Features.HandPullHandlers.Commands.UpdateHandPull;
public sealed record UpdateHandPullCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid? EmployeeId { get; set; }
    public string WithdrawHandPullOrderNo { get; set; }
    public DateTime? WithdrawHandPullOrderDate { get; set; }
    public string RaiseHandPullOrderNo { get; set; }
    public DateTime? RaiseHandPullOrderDate { get; set; }
    public string? Note { get; set; }
}