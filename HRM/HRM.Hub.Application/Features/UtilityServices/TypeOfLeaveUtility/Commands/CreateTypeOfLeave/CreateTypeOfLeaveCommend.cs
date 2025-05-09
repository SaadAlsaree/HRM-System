using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.CreateTypeOfLeave;

public class CreateTypeOfLeaveCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
