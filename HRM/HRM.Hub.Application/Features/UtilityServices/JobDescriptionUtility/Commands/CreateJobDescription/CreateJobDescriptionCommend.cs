using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.CreateJobDescription;

public class CreateJobDescriptionCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
