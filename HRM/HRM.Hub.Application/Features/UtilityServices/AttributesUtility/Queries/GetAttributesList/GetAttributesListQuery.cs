namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributesList;

public class GetAttributesListQuery : IRequest<Response<IEnumerable<GetAttributesListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}