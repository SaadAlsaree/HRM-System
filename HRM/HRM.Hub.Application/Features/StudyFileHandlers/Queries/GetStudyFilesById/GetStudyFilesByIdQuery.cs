namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFilesById;

public class GetStudyFilesByIdQuery : IRequest<Response<GetStudyFilesByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}