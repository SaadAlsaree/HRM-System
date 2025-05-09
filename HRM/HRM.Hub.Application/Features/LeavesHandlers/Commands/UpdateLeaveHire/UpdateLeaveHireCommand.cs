using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeaveHire;
public class UpdateLeaveHireCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid LeaveId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
}