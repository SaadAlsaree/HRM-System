namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryById;

public class GetJobCategoryByIdQuery : IRequest<Response<GetJobCategoryByIdViewModel>>
{
    public int Id { get; set; }
}