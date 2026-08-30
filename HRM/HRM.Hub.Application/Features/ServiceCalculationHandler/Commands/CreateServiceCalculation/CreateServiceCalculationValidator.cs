namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.CreateServiceCalculation;

public class CreateServiceCalculationValidator : AbstractValidator<CreateServiceCalculationCommend>
{
    public CreateServiceCalculationValidator()
    {
        RuleFor(p => p.EmployeeId).NotEmpty().WithMessage("الرقم الوظيفي مطلوب");
        RuleFor(p => p.TypeOfServiceId).GreaterThan(0).WithMessage("نوع الخدمة مطلوب");
        RuleFor(p => p.OrderNo).NotEmpty().WithMessage("رقم الأمر الإداري مطلوب");
    }
}