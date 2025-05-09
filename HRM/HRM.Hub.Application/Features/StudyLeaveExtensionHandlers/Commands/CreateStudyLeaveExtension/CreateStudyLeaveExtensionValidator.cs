using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.CreateStudyLeaveExtension;

namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.CreateStudyLeaveExtension;

public class CreateStudyLeaveExtensionValidator : AbstractValidator<CreateStudyLeaveExtensionCommand>
{
    public CreateStudyLeaveExtensionValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty();

    }
}