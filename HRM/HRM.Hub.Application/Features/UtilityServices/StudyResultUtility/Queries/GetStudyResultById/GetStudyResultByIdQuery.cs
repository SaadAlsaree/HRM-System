namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultById;

public class GetStudyResultByIdQuery : IRequest<Response<GetStudyResultByIdViewModel>>
{
    public int Id { get; set; }
}