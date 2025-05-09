using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.UpdateLeavesBalance;
public class UpdateLeavesBalanceCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public int? Balance { get; set; }

    public string Note { get; set; }
}