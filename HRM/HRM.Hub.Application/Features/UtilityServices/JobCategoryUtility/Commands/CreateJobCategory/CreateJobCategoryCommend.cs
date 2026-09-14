using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.CreateJobCategory;

public class CreateJobCategoryCommend : IRequest<Response<bool>>
{
    public int DegreeId { get; set; }
    public decimal IncreaseAmount { get; set; }
    // Months until the next annual allowance in this category (fallback when no allowance rule matches).
    public int NextPromotion { get; set; }

    public string Name { get; set; }

}
