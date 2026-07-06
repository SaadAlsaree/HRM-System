using HRM.Hub.Application.Contracts;
using MediatR;

namespace HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowanceById;
public class GetAnnualAllowanceByIdQuery : IRequest<Response<GetAnnualAllowanceByIdViewModel>>
{
    public Guid Id { get; set; }
}
