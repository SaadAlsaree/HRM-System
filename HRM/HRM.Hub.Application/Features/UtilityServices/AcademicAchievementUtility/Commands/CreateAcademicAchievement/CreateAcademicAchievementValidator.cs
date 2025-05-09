namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement;
public class CreateAcademicAchievementValidator : AbstractValidator<CreateAcademicAchievementCommend>
{
    public CreateAcademicAchievementValidator()
    {
        RuleFor(p => p.Name).NotEmpty().NotNull().WithMessage("يجب ان لا يكون الحقل فارغ");
    }
}