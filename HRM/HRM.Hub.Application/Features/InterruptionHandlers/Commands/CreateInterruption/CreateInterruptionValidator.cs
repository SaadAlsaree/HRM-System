namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.CreateInterruption;
public sealed class CreateInterruptionValidator : AbstractValidator<CreateInterruptionCommand>
{
    public CreateInterruptionValidator()
    {
        // RuleFor(x => x.EmployeeId).NotEmpty();
        //
        // RuleFor(x => x.Reason).NotEmpty().MaximumLength(350);
        //
        // RuleFor(x => x.Note).NotEmpty().MaximumLength(1000);
    }
}