namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInformation;

public class GetEmployeeContactInformationQuery:IRequest<Response<PagedResult<GetContactInformationViewModel>>>, IPaginationQuery
{
    public Guid? EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}