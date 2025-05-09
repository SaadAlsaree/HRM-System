namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusList;

public class GetStudyStatusListQuery : IRequest<Response<IEnumerable<GetStudyStatusListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}