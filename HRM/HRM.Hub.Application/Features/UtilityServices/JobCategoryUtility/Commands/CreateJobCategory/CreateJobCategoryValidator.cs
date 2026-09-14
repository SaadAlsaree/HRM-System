namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.CreateJobCategory;
public class CreateJobCategoryValidator : AbstractValidator<CreateJobCategoryCommend>
{
    public CreateJobCategoryValidator()
    {

        RuleFor(x => x.NextPromotion)
            .InclusiveBetween(0, 600)
            .WithMessage("مدة العلاوة يجب أن تكون بين 0 و 600 شهر");
    }
}