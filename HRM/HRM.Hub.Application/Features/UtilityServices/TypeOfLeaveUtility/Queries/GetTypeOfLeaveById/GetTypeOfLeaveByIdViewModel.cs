namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveById;

public class GetTypeOfLeaveByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}