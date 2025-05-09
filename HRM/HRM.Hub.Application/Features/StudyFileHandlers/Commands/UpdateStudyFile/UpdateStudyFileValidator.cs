namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.UpdateStudyFile;

public class UpdateStudyFileValidator:AbstractValidator<UpdateStudyFileCommand>
{
    public UpdateStudyFileValidator()
    {
        RuleFor(x => x.StudyFileId).NotEmpty();
        RuleFor(x => x.DocumentNo).NotEmpty();
    }
}