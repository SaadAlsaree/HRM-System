using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetAllMovements;
public sealed record GetAllMovementsQuery : IRequest<Response<PagedResult<GetAllMovementsDataViewModel>>>,IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}
