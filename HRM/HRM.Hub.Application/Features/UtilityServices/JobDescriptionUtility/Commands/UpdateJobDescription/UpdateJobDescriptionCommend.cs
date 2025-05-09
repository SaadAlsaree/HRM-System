using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.UpdateJobDescription;

public class UpdateJobDescriptionCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
