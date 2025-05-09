using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Commands.UpdateLongLeaveType;

public class UpdateLongLeaveTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
