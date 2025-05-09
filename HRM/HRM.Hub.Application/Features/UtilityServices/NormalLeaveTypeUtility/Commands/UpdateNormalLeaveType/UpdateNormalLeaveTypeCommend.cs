using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Commands.UpdateNormalLeaveType;

public class UpdateNormalLeaveTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
