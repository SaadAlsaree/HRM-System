namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddEmployee;

public sealed class AddEmployeeCommendValidator : AbstractValidator<AddEmployeeCommend>
{
    public AddEmployeeCommendValidator()
    {
        // Identifiers
        RuleFor(x => x.JobCode)
            .NotEmpty().WithMessage("الرقم الوظيفي مطلوب")
            .MaximumLength(35).WithMessage("الرقم الوظيفي يتجاوز الطول المسموح");

        // Required personal fields
        RuleFor(x => x.FirstName).NotEmpty().WithMessage("الاسم الأول مطلوب").MaximumLength(25);
        RuleFor(x => x.SecondName).NotEmpty().WithMessage("اسم الأب مطلوب").MaximumLength(25);
        RuleFor(x => x.ThirdName).NotEmpty().WithMessage("اسم الجد مطلوب").MaximumLength(25);
        RuleFor(x => x.SurName).NotEmpty().WithMessage("اللقب مطلوب").MaximumLength(25);

        // Job-related fields (stored in Promotion / ManagementInformation).
        // These foreign keys are non-nullable, so a value of 0 would violate the FK constraint
        // and cause a silent partial save. Rejecting them up-front gives the user a clear message.
        RuleFor(x => x.JobDegreeId).GreaterThan(0).WithMessage("الدرجة الوظيفية مطلوبة");
        RuleFor(x => x.JobCategoryId).GreaterThan(0).WithMessage("الفئة الوظيفية مطلوبة");
        RuleFor(x => x.JobTitleId).GreaterThan(0).WithMessage("العنوان الوظيفي مطلوب");
        RuleFor(x => x.JobDescriptionId).GreaterThan(0).WithMessage("الوصف الوظيفي مطلوب");
        RuleFor(x => x.PositionId).GreaterThan(0).WithMessage("المنصب مطلوب");
        RuleFor(x => x.DirectorateId).GreaterThan(0).WithMessage("الدائرة مطلوبة");
    }
}
