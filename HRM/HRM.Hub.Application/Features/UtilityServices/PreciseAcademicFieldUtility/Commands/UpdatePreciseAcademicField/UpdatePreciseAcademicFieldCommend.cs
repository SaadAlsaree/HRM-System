using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.UpdatePreciseAcademicField;

public class UpdatePreciseAcademicFieldCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
