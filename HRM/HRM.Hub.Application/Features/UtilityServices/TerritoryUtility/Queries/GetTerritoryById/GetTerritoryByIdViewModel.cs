namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritoryById;

public class GetTerritoryByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}