namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorate;
public class GetDirectorateViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ShortKey { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}