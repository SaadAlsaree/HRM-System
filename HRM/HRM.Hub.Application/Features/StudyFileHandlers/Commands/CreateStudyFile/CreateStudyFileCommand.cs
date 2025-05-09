namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.CreateStudyFile;

public class CreateStudyFileCommand: IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public string DocumentNo { get; set; }

    public DateOnly? DocumentDate { get; set; }

    public string Notes { get; set; }


}