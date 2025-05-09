namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryList;

public class GetJobCategoryListQuery : IRequest<Response<IEnumerable<GetJobCategoryListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}