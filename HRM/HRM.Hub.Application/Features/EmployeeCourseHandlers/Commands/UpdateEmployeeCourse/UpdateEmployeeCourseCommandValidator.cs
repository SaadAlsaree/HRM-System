namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Commands.UpdateEmployeeCourse;
public sealed class UpdateEmployeeCourseCommandValidator : AbstractValidator<UpdateEmployeeCourseCommand>
{
    public UpdateEmployeeCourseCommandValidator()
    {
        RuleFor(x => x.Id).NotEmpty();

        RuleFor(x => x.EmployeeId).NotEmpty();

        RuleFor(x => x.StartDate).NotEmpty();

        RuleFor(x => x.EndDate).NotEmpty();


    }
}