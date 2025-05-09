namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicCertificateTypeById;

public class GetAcademicCertificateTypeByIdQuery : IRequest<Response<GetAcademicCertificateTypeByIdViewModel>>
{
    public int Id { get; set; }
}