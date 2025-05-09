namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributes;
public class GetAttributesViewModel
{
    public Guid Id { get; set; }

    public Guid EmployeeId { get; set; }

    public string AttributeKey { get; set; }

    public string AttributeValue { get; set; }

    public Status Status { get; set; }

    public string StatusName { get; set; }
}