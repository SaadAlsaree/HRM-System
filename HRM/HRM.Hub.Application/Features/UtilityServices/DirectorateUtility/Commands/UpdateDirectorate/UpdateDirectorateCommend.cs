using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Commands.UpdateDirectorate;

public class UpdateDirectorateCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }

    public string ShortKey { get; set; }
}
