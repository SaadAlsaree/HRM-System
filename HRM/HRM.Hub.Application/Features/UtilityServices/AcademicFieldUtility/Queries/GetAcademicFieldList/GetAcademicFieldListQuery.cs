namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicFieldList;

public class GetAcademicFieldListQuery : IRequest<Response<IEnumerable<GetAcademicFieldListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}