namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFilesById;

public class GetStudyFilesByIdViewModel:BaseViewModel<Guid>
{
    
    public string DocumentNo { get; set; }

    public DateOnly? DocumentDate { get; set; }

    public string Notes { get; set; }


}