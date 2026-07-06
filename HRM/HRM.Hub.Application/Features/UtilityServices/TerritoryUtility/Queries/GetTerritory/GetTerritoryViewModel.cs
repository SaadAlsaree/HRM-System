namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritory;
public class GetTerritoryViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int? ProvinceId { get; set; }
    public string ProvinceName { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}