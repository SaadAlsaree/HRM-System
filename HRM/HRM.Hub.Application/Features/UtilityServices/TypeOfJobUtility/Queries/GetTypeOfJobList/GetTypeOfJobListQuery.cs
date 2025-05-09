namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobList;

public class GetTypeOfJobListQuery : IRequest<Response<IEnumerable<GetTypeOfJobListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}