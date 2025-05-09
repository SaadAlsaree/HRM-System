using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Commands.UpdateAcademicField;

public class UpdateAcademicFieldCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }

    public string Name { get; set; }
}
