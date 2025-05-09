namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentById;

public class GetTypeOfAssignmentByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}