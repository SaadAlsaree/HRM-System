namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeById;

public class GetJobDegreeByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}