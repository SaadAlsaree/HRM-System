namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFiles;

public class StudyFileViewModel:BaseViewModel<Guid>
{
    public string DocumentNo { get; set; }

    public DateOnly? DocumentDate { get; set; }

    public string Notes { get; set; }



}