namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusById;

public class GetStudyStatusByIdQuery : IRequest<Response<GetStudyStatusByIdViewModel>>
{
    public int Id { get; set; }
}