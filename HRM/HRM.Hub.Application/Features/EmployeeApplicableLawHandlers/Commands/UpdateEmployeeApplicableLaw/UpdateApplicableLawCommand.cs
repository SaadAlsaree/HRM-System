using HRM.Hub.Application.Helper;
using Swashbuckle.AspNetCore.Annotations;

namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.UpdateEmployeeApplicableLaw;

public class UpdateApplicableLawCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public string Note { get; set; }


}
