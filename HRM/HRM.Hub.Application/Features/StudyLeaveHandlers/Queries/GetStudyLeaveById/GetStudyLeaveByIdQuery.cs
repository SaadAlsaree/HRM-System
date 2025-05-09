namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveById;

public class GetStudyLeaveByIdQuery : IRequest<Response<GetStudyLeaveByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}