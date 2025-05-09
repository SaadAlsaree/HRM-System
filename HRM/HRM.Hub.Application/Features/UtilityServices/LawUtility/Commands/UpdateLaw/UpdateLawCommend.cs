using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Commands.UpdateLaw;

public class UpdateLawCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
