namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.CreateAcademicCertificateType;

public class CreateAcademicCertificateTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
