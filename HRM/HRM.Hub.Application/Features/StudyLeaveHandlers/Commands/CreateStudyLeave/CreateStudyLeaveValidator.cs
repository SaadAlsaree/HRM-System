namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.CreateStudyLeave;

public class CreateStudyLeaveValidator:AbstractValidator<CreateStudyLeaveCommand>
{
    public CreateStudyLeaveValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty();
    }
}