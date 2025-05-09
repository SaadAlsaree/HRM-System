namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicAchievementList;

public class GetAcademicCertificateTypeListQuery : IRequest<Response<IEnumerable<GetAcademicCertificateTypeListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}