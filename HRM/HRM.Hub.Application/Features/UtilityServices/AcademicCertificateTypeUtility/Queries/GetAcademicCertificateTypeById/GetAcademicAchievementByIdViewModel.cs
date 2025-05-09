namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicCertificateTypeById;

public class GetAcademicCertificateTypeByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}