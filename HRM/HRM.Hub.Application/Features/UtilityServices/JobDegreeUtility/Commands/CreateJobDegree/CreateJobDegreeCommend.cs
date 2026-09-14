namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.CreateJobDegree;

public class CreateJobDegreeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
    public decimal IncreaseAmount { get; set; }
    // Months until the next promotion from this degree (fallback when no promotion rule matches).
    public int NextPromotion { get; set; }
}
