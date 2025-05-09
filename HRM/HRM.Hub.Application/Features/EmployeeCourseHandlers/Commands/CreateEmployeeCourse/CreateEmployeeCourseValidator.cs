namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Commands.CreateEmployeeCourse;
public sealed class CreateEmployeeCourseValidator : AbstractValidator<CreateEmployeeCourseCommand>
{
    public CreateEmployeeCourseValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty();

        RuleFor(x => x.StartDate).NotEmpty();

        RuleFor(x => x.EndDate).NotEmpty();



    }
}