namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveExcelFile;

public class GetStudyLeaveExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}