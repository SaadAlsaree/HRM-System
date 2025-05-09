namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributesById;

public class GetAttributesByIdViewModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}