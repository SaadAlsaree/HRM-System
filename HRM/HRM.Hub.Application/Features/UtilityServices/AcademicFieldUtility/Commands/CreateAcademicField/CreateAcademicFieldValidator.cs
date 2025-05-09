namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Commands.CreateAcademicField;
public class CreateAcademicFieldValidator : AbstractValidator<CreateAcademicFieldCommend>
{
    public CreateAcademicFieldValidator()
    {
        RuleFor(p => p.Name).NotEmpty().NotNull().WithMessage("??? ?? ?? ???? ????? ????");
        // Write Your Validation here
    }
}