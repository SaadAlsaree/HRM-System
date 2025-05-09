using HRM.Hub.Application.Features.StudyFileHandlers.Commands.UpdateStudyFile;

namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.UpdateStudyLeaveExtension;

public class UpdateStudyLeaveExtensionValidator : AbstractValidator<UpdateStudyLeaveExtensionCommand>
{
    public UpdateStudyLeaveExtensionValidator()
    {
        RuleFor(x => x.StudyLeaveExtensionId).NotEmpty();
    }
}