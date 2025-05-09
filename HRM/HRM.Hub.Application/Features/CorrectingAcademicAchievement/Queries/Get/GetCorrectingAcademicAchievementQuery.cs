namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.Get;
public class GetCorrectingAcademicAchievementQuery : IRequest<Response<PagedResult<GetCorrectingAcademicAchievementViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public bool IsCertificateCalculationTerm { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}