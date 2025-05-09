namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryById;

public class GetTypeOfDisciplinaryByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
    public int CountOfDayDelay { get; set; }
}