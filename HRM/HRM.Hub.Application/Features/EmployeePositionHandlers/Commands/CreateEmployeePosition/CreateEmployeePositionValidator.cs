namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Commands.CreateEmployeePosition;
public class CreateEmployeePositionValidator : AbstractValidator<CreateEmployeePositionCommend>
{
    public CreateEmployeePositionValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty().WithMessage("الموظف مطلوب");
        RuleFor(x => x.AdministrativeOrderNo).NotEmpty().WithMessage("رقم الأمر الإداري مطلوب (BR-004)");
        RuleFor(x => x.AdministrativeOrderDate).NotNull().WithMessage("تاريخ الأمر الإداري مطلوب");
        RuleFor(x => x.PositionId).NotNull().WithMessage("المنصب مطلوب");
        RuleFor(x => x.DirectorateId).NotNull().WithMessage("المديرية مطلوبة");
    }
}