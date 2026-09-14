using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.UpdateJobDegree;

public class UpdateJobDegreeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    // Must match JobDegree.Name: the UI sends "name", and "DegreeName" silently ignored degree renames.
    public string Name { get; set; }

    public decimal IncreaseAmount { get; set; }
    // Months until the next promotion from this degree (fallback when no promotion rule matches).
    public int NextPromotion { get; set; }
}
