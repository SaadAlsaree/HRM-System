namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.UpdateInterruption;
public sealed class UpdateInterruptionValidator : AbstractValidator<UpdateInterruptionCommand>
{
    public UpdateInterruptionValidator()
    {
        RuleFor(x => x.Id).NotEmpty();

        RuleFor(x => x.EmployeeId).NotEmpty();

        RuleFor(x => x.Reason).NotEmpty().MaximumLength(350);

        RuleFor(x => x.Note).NotEmpty().MaximumLength(1000);

        RuleFor(x => x.Status).NotEmpty();
    }
}