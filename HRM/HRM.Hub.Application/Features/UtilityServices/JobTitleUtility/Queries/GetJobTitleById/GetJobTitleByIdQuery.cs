namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleById;

public class GetJobTitleByIdQuery : IRequest<Response<GetJobTitleByIdViewModel>>
{
    public int Id { get; set; }
}