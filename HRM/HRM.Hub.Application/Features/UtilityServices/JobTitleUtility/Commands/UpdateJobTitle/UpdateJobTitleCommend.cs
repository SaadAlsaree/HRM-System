using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.UpdateJobTitle;

public class UpdateJobTitleCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public int DegreeId { get; set; }

    public string Name { get; set; }
}
