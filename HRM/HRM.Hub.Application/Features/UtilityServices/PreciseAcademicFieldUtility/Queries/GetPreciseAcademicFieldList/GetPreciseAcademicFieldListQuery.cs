namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldList;

public class GetPreciseAcademicFieldListQuery : IRequest<Response<IEnumerable<GetPreciseAcademicFieldListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}