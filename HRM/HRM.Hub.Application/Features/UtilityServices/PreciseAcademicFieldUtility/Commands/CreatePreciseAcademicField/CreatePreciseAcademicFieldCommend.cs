using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.CreatePreciseAcademicField;

public class CreatePreciseAcademicFieldCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
