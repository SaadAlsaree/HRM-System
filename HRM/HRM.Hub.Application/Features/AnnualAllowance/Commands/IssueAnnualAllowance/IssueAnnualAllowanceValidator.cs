using FluentValidation;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.AnnualAllowance.Commands.IssueAnnualAllowance;

public class IssueAnnualAllowanceValidator : AbstractValidator<IssueAnnualAllowanceCommand>
{
    public IssueAnnualAllowanceValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty().WithMessage("معرف الموظف مطلوب");
        RuleFor(x => x.BonusTypeId).GreaterThan(0).WithMessage("نوع المكافأة مطلوب");
        RuleFor(x => x.AdministrativeOrderNo).NotEmpty().When(x => x.AdministrativeOrderDate != default)
            .WithMessage("رقم الأمر الإداري مطلوب عند الموافقة");
        RuleFor(x => x.AdministrativeOrderDate).NotEmpty().When(x => !string.IsNullOrEmpty(x.AdministrativeOrderNo))
            .WithMessage("تاريخ الأمر الإداري مطلوب عند الموافقة");
    }
}