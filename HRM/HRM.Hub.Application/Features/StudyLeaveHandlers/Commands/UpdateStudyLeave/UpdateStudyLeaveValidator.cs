namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.UpdateStudyLeave;

public class UpdateStudyLeaveValidator:AbstractValidator<UpdateStudyLeaveCommand>
{
    public UpdateStudyLeaveValidator()
    {
        RuleFor(x => x.StudyLeaveId).NotEmpty();
    }
}