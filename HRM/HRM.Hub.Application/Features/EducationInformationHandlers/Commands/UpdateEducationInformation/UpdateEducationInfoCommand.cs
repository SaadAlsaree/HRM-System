using HRM.Hub.Application.Helper;
using Swashbuckle.AspNetCore.Annotations;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.UpdateEducationInformation;

public class UpdateEducationInfoCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public string Notes { get; set; }

    public Status Status { get; set; }


}
