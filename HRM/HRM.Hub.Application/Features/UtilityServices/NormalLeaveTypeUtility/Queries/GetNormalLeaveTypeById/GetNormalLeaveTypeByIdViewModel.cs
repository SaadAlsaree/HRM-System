namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveTypeById;

public class GetNormalLeaveTypeByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}