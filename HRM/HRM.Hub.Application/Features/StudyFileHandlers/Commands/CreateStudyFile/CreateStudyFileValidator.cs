namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.CreateStudyFile;

public class CreateStudyFileValidator:AbstractValidator<CreateStudyFileCommand>
{
    public CreateStudyFileValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty();
        RuleFor(x => x.DocumentNo).NotEmpty();
        
    }
}