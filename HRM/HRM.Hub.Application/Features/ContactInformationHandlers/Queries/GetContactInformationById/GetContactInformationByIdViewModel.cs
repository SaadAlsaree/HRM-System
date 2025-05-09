namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetContactInformationById;

public class GetContactInformationByIdViewModel:BaseViewModel<Guid>
{
    public int? LevelOfRelationshipId { get; set; }
    public string LevelOfRelationshipName { get; set; }
    public string PhoneNumber { get; set; }
    public string ContactName { get; set; }
    public string Notes { get; set; }
}