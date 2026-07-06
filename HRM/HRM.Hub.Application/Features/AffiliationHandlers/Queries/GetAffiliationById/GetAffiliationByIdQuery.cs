
namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliationById;

public class GetAffiliationByIdQuery : IRequest<Response<GetAffiliationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}
