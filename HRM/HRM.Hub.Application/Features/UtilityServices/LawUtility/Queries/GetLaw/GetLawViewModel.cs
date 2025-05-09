namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLaw;
public class GetLawViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}