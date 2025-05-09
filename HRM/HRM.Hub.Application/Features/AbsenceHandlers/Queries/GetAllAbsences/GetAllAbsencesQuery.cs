namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAllAbsences;
public class GetAllAbsencesQuery : IRequest<Response<PagedResult<GetAllAbsencesViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}