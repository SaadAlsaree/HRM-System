namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.UpdateJobDegree;
public class UpdateJobDegreeValidator : AbstractValidator<UpdateJobDegreeCommend>
{
    public UpdateJobDegreeValidator()
    {

        RuleFor(x => x.NextPromotion)
            .InclusiveBetween(0, 600)
            .WithMessage("مدة الترفيع يجب أن تكون بين 0 و 600 شهر");
    }
}