namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveType;
public class GetLongLeaveTypeViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}