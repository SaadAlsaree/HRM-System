using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Commands.UpdateAttributes;

public class UpdateAttributesCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }

    public string AttributeKey { get; set; }

    public string AttributeValue { get; set; }

}