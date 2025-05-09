namespace HRM.Hub.Application.Features.ContactInformationHandlers.Commands.CreateContactInformation;
public class CreateContactInformationCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public int? LevelOfRelationshipId { get; set; }
    public string PhoneNumber { get; set; }
    public string ContactName { get; set; }
    public string Notes { get; set; }
    public Guid? CreateBy { get; set; }
}