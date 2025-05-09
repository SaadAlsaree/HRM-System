namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinary;
public class GetTypeOfDisciplinaryViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public int CountOfDayDelay { get; set; }
    public Status Status { get; set; }
}