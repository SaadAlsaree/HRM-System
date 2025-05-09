namespace HRM.Hub.Application.Features.HandPullHandlers.Commands.CreateHandPull;
public sealed record CreateHandPullCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string WithdrawHandPullOrderNo { get; set; }
    public DateTime? WithdrawHandPullOrderDate { get; set; }
    public string RaiseHandPullOrderNo { get; set; }
    public DateTime? RaiseHandPullOrderDate { get; set; }
    public string? Note { get; set; }
}