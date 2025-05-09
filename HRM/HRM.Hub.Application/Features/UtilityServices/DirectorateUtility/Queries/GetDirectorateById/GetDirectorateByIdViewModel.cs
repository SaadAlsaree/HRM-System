namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorateById;

public class GetDirectorateByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ShortKey { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}