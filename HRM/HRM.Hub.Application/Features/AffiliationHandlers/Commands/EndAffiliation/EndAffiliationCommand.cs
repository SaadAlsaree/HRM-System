using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.EndAffiliation;

public class EndAffiliationCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public string EndOrderNo { get; set; }

    public DateOnly? EndOrderDate { get; set; }

    public string Note { get; set; }

    public Guid? LastUpdateBy { get; set; }
}
