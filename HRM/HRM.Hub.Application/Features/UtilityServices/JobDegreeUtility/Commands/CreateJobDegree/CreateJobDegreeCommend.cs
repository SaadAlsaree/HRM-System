namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.CreateJobDegree;

public class CreateJobDegreeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
    public decimal IncreaseAmount { get; set; }
}
