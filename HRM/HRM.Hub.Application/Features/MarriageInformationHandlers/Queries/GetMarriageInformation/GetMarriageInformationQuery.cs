namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformation;

public class GetMarriageInformationQuery :  IRequest<Response<PagedResult<GetMarriageInformationViewModel>>>,IPaginationQuery
{
    public EmployeePositionTypeEnum EmployeePositionType { get; set; }
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}
