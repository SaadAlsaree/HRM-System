namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.CreateJobDegree;
public class CreateJobDegreeValidator : AbstractValidator<CreateJobDegreeCommend>
{
    public CreateJobDegreeValidator()
    {

        RuleFor(x => x.NextPromotion)
            .InclusiveBetween(0, 600)
            .WithMessage("مدة الترفيع يجب أن تكون بين 0 و 600 شهر");
    }
}