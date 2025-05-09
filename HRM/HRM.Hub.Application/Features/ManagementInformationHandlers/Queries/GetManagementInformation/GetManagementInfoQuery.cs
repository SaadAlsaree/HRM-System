namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformation;
public class GetManagementInfoQuery : IRequest<Response<PagedResult<GetManagementInfoViewModel>>>, IPaginationQuery
{
    public int Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }

}