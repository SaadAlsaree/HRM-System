namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniorityList;

public class GetTypeOfSeniorityListQuery : IRequest<Response<IEnumerable<GetTypeOfSeniorityListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}