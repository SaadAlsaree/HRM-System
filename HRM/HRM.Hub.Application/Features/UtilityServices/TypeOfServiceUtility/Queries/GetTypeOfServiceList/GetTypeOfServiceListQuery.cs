namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceList;

public class GetTypeOfServiceListQuery : IRequest<Response<IEnumerable<GetTypeOfServiceListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}