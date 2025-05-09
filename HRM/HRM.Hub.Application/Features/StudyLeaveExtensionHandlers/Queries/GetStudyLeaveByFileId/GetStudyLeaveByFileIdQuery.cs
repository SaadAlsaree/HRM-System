namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveByFileId;

public class GetStudyLeaveByFileIdQuery:IRequest<Response<GetStudyLeaveByFileIdViewModel>>
{
    public Guid FileId { get; set; }
}
