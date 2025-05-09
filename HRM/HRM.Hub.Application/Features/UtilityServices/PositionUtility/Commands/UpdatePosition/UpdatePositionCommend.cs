using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Commands.UpdatePosition;

public class UpdatePositionCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
