namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeList;

public class GetStudyExtensionOrderTypeListQuery : IRequest<Response<IEnumerable<GetStudyExtensionOrderTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}