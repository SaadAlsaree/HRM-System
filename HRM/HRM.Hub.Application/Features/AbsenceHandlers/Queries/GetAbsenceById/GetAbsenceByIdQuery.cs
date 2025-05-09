namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAbsenceById;
public class GetAbsenceByIdQuery : IRequest<Response<GetAbsenceByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}