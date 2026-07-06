using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.RenewAffiliation;

public class RenewAffiliationCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public DateOnly? NewToDate { get; set; }
    public int? NewDurationMonths { get; set; }
    public string NewOrderNo { get; set; }
    public DateOnly? NewOrderDate { get; set; }
    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
