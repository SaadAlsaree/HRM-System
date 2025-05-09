namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionById;

public class GetJobDescriptionByIdQuery : IRequest<Response<GetJobDescriptionByIdViewModel>>
{
    public int Id { get; set; }
}