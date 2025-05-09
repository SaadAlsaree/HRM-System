using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.UpdateJobCategory;

public class UpdateJobCategoryCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public int DegreeId { get; set; }
    public decimal IncreaseAmount { get; set; }

    public string Name { get; set; }
}
