using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.CreateJobCategory;

public class CreateJobCategoryCommend : IRequest<Response<bool>>
{
    public int DegreeId { get; set; }
    public decimal IncreaseAmount { get; set; }

    public string Name { get; set; }

}
