using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Commands.CreateNormalLeaveType;

public class CreateNormalLeaveTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
