namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyTypeById;

public class GetStudyTypeByIdQuery : IRequest<Response<GetStudyTypeByIdViewModel>>
{
    public int Id { get; set; }
}