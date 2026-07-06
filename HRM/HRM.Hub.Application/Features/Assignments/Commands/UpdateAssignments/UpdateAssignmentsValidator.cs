namespace HRM.Hub.Application.Features.Assignments.Commands.UpdateAssignments;
public class UpdateAssignmentsValidator : AbstractValidator<UpdateAssignmentsCommend>
{
    public UpdateAssignmentsValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty().WithMessage("الموظف مطلوب");
        RuleFor(x => x.OrderNo).NotEmpty().WithMessage("رقم الأمر مطلوب");
        RuleFor(x => x.OrderDate).NotNull().WithMessage("تاريخ الأمر مطلوب");
        RuleFor(x => x.IssuingAuthority).NotEmpty().WithMessage("جهة الإصدار مطلوبة");
        RuleFor(x => x.TypeOfAssignmentId).NotNull().WithMessage("نوع التكليف مطلوب");
        RuleFor(x => x.DurationOfAssignment).GreaterThanOrEqualTo(0).WithMessage("المدة لا يمكن أن تكون سالبة");
    }
}