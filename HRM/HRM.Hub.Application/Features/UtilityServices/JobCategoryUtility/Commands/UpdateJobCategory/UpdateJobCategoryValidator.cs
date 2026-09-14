namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.UpdateJobCategory;
public class UpdateJobCategoryValidator : AbstractValidator<UpdateJobCategoryCommend>
{
    public UpdateJobCategoryValidator()
    {

        RuleFor(x => x.NextPromotion)
            .InclusiveBetween(0, 600)
            .WithMessage("مدة العلاوة يجب أن تكون بين 0 و 600 شهر");
    }
}