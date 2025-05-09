namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessType;
public class GetSicknessTypeViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}