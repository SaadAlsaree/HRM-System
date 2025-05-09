namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicCertificateType;

public class GetAcademicCertificateTypeQuery : IRequest<Response<PagedResult<GetAcademicCertificateTypeViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
