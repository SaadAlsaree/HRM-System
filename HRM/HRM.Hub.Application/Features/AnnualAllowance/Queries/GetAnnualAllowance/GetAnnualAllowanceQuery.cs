using HRM.Hub.Application.Contracts;
using HRM.Hub.Domain.Common.Enums;
using MediatR;

namespace HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowance;
public class GetAnnualAllowanceQuery : IRequest<Response<PagedResult<GetAnnualAllowanceViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;
}
