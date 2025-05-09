using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.UpdateJobDegree;

public class UpdateJobDegreeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string DegreeName { get; set; }

    public decimal IncreaseAmount { get; set; }
}
