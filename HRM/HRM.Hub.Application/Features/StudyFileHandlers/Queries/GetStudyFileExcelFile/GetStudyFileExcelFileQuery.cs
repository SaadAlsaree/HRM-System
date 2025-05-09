namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;

public class GetStudyFileExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}