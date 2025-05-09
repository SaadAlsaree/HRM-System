using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.ContactInformationHandlers.Commands.UpdateContactInformation;

public class UpdateContactInformationCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public int? LevelOfRelationshipId { get; set; }
    public string PhoneNumber { get; set; }
    public string ContactName { get; set; }
    public string Notes { get; set; }
    public Guid? LastUpdateBy { get; set; }
}