namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegree;
public class GetJobDegreeViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal IncreaseAmount { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}