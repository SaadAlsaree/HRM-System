namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformation;
public class GetEducationInfoQuery : IRequest<Response<PagedResult<GetEducationInfoViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}