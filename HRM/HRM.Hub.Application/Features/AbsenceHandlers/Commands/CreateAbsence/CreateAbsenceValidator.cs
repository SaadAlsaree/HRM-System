namespace HRM.Hub.Application.Features.AbsenceHandlers.Commands.CreateAbsence;
public sealed class CreateAbsenceValidator : AbstractValidator<CreateAbsenceCommand>
{
    public CreateAbsenceValidator()
    {
        // RuleFor(x => x.EmployeeId).NotEmpty();
        //
        // RuleFor(x => x.BookNo).NotEmpty().MaximumLength(15);
        //
        // RuleFor(x => x.BookDate).NotEmpty();
        //
        // RuleFor(x => x.AbsenceDate).NotEmpty();
        //
        // RuleFor(x => x.Note).NotEmpty().MaximumLength(1000);
    }
}