using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.UpdateTypeOfDisciplinary;

public class UpdateTypeOfDisciplinaryCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
    public int CountOfDayDelay { get; set; }
}
