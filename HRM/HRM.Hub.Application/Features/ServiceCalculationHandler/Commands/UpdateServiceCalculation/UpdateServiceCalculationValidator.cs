namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.UpdateServiceCalculation;

public class UpdateServiceCalculationValidator : AbstractValidator<UpdateServiceCalculationCommend>
{
    public UpdateServiceCalculationValidator()
    {
        RuleFor(p => p.Id).NotEmpty().WithMessage("المعرف مطلوب");
        RuleFor(p => p.EmployeeId).NotEmpty().WithMessage("الرقم الوظيفي مطلوب");
        RuleFor(p => p.TypeOfServiceId).GreaterThan(0).WithMessage("نوع الخدمة مطلوب");
        RuleFor(p => p.OrderNo).NotEmpty().WithMessage("رقم الأمر الإداري مطلوب");
    }
}