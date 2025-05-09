namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJob;
public class GetTypeOfJobViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}