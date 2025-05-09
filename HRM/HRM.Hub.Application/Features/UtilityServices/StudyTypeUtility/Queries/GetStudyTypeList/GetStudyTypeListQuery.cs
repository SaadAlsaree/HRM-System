namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyTypeList;

public class GetStudyTypeListQuery : IRequest<Response<IEnumerable<GetStudyTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}