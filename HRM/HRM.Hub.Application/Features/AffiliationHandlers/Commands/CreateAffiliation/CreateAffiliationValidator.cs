namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.CreateAffiliation;
public class CreateAffiliationValidator : AbstractValidator<CreateAffiliationCommand>
{
    public CreateAffiliationValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty().WithMessage("الموظف مطلوب");
        RuleFor(x => x.OrderNo).NotEmpty().WithMessage("رقم الأمر مطلوب");
        RuleFor(x => x.OrderDate).NotNull().WithMessage("تاريخ الأمر مطلوب");
        RuleFor(x => x.IssuingAuthority).NotEmpty().WithMessage("جهة الإصدار مطلوبة");
        RuleFor(x => x.TypeOfAssignmentId).NotNull().WithMessage("نوع التكليف مطلوب");
        RuleFor(x => x.OriginalEntity).NotEmpty().WithMessage("جهة الانتساب مطلوبة");
        RuleFor(x => x.DurationMonths).GreaterThanOrEqualTo(0).WithMessage("مدة الانتساب لا يمكن أن تكون سالبة");
        RuleFor(x => x.FromDate).NotNull().WithMessage("تاريخ البداية مطلوب");
        RuleFor(x => x.ToDate).NotNull().WithMessage("تاريخ النهاية مطلوب");
        RuleFor(x => x).Must(x => !x.FromDate.HasValue || !x.ToDate.HasValue || x.FromDate < x.ToDate)
            .WithMessage("تاريخ البداية يجب أن يكون قبل تاريخ النهاية");
    }
}
