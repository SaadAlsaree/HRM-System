namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInformation;

public class GetContactInformationViewModel:BaseViewModel<Guid>
{
    public int? LevelOfRelationshipId { get; set; }
    public string LevelOfRelationshipName { get; set; }
    public string PhoneNumber { get; set; }
    public string ContactName { get; set; }
    public string Notes { get; set; }
}