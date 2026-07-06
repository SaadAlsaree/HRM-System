using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.ExtendLeave;

public sealed record ExtendLeaveCommand : IRequest<Response<bool>>
{
    public Guid LeaveId { get; set; }
    public int ExtensionDays { get; set; }
    public DateOnly NewEndDate { get; set; }
    public string? OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string? Reason { get; set; }
}
