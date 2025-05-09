namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorateById;

public class GetGovernorateByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}