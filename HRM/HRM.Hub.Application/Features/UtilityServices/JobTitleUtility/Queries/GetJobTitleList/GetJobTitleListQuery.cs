namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleList;

public class GetJobTitleListQuery : IRequest<Response<IEnumerable<GetJobTitleListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}