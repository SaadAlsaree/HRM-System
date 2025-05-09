namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Queries.GetServiceCalculation;

public class GetServiceCalculationQuery :  IRequest<Response<PagedResult<GetServiceCalculationViewModel>>>,IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}
