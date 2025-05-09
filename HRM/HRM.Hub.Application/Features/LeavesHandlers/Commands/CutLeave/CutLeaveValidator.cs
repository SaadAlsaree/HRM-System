namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CutLeave;
public class CutLeaveValidator : AbstractValidator<CutLeaveCommand>
{
    public CutLeaveValidator()
    {
        RuleFor(x => x.EmployeeId)
            .NotEmpty().WithMessage("Employee ID is required.");

        RuleFor(x => x.OrderNo)
            .NotEmpty().WithMessage("Order number is required.");

        RuleFor(x => x.OrderDate)
            .NotEmpty().WithMessage("Order date is required.");

        RuleFor(x => x.DaysToCut)
            .NotEmpty().WithMessage("Days to cut is required.")
            .GreaterThan(0).WithMessage("Days to cut must be greater than 0.");

        RuleFor(x => x.CutReason)
            .NotEmpty().WithMessage("Cut reason is required.");
    }
}