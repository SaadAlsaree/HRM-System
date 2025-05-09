namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeList;

public class GetJobDegreeListQuery : IRequest<Response<IEnumerable<GetJobDegreeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}