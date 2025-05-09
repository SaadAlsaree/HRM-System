namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionList;

public class GetJobDescriptionListQuery : IRequest<Response<IEnumerable<GetJobDescriptionListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}