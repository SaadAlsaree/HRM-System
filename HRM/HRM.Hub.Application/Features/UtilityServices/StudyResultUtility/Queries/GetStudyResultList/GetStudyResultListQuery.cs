namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultList;

public class GetStudyResultListQuery : IRequest<Response<IEnumerable<GetStudyResultListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}