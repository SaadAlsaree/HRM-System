namespace HRM.Hub.Application.Features.MovementHandlers.Commands.CreateMovement;
public sealed class CreateMovementValidator : AbstractValidator<CreateMovementCommand>
{
    public CreateMovementValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty().WithMessage("الموظف مطلوب");
        RuleFor(x => x.OrderNo).NotEmpty().WithMessage("رقم الأمر مطلوب (BR-003)");
        RuleFor(x => x.OrderDate).NotNull().WithMessage("تاريخ الأمر مطلوب");
        RuleFor(x => x.ToDirectorateId).NotNull().WithMessage("المديرية الجديدة مطلوبة");
    }
}