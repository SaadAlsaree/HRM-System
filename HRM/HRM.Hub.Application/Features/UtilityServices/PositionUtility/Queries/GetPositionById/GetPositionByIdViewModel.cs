namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPositionById;

public class GetPositionByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}