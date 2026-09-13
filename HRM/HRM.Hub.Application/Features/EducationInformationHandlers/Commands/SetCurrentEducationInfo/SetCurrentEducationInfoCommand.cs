using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.SetCurrentEducationInfo;

public class SetCurrentEducationInfoCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
}
