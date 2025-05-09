using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.CreateJobTitle;

public class CreateJobTitleCommend : IRequest<Response<bool>>
{
    public int DegreeId { get; set; }

    public string Name { get; set; }

}
