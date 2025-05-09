namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionById;

public class GetStudyLeaveExtensionByIdQuery : IRequest<Response<GetStudyLeaveExtensionByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}