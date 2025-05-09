using HRM.Hub.Application.Helper.Pagination;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetAllInterruptions;
public sealed record GetAllInterruptionsQuery : IRequest<Response<PagedResult<GetAllInterruptionsViewModel>>>, IPaginationQuery
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string NameTerm { get; set; }
    public Status Status { get; set; } = Domain.Common.Enums.Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}