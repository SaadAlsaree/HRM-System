namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributesById;

public class GetAttributesByIdQuery : IRequest<Response<GetAttributesByIdViewModel>>
{
    public Guid Id { get; set; }
}