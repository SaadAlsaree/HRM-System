namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.CreateTypeOfDisciplinary;

public class CreateTypeOfDisciplinaryCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
    public int CountOfDayDelay { get; set; }
}
