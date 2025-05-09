using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;

public class UpdateAcademicCertificateTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }

    public string Name { get; set; }


}
