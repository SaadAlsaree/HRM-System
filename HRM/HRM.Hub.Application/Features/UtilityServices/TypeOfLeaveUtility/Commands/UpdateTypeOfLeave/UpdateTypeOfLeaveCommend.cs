using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.UpdateTypeOfLeave;

public class UpdateTypeOfLeaveCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
