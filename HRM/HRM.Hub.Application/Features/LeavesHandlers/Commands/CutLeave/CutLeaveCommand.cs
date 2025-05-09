using HRM.Hub.Application.Helper;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CutLeave;
public sealed record CutLeaveCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid LeaveId { get; set; }
    
    public Guid EmployeeId { get; set; }
    
    public string OrderNo { get; set; }
    
    public DateOnly? OrderDate { get; set; }
    
    public string Note { get; set; }
    
    // The number of days to cut from the leave
    public int? DaysToCut { get; set; }
    
    // The reason for cutting the leave
    public string CutReason { get; set; }
    
    // Flag to indicate if leave balance should be adjusted
    public bool AdjustBalance { get; set; } = true;
}