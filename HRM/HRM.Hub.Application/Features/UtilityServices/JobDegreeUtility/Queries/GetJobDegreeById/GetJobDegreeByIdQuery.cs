namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeById;

public class GetJobDegreeByIdQuery : IRequest<Response<GetJobDegreeByIdViewModel>>
{
    public int Id { get; set; }
}