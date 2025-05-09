namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.CreateAcademicCertificateType;
public class CreateAcademicCertificateTypeValidator : AbstractValidator<CreateAcademicCertificateTypeCommend>
{
    public CreateAcademicCertificateTypeValidator()
    {
        RuleFor(p => p.Name).NotEmpty().NotNull().WithMessage("??? ?? ?? ???? ????? ????");
        // Write Your Validation here
    }
}