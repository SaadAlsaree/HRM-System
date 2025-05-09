namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetLotEmployee;
public class GetLotEmployeeQuery : IRequest<Response<PagedResult<GetLotEmployeeView>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get ; set; }
    public byte PageSize { get ; set; }
}