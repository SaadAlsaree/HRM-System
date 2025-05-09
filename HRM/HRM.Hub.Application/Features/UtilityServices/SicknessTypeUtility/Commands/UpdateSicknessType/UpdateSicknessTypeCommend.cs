using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Commands.UpdateSicknessType;

public class UpdateSicknessTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
