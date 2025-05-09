namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalance;
public class GetLeavesBalanceViewModel : BaseViewModel<Guid>
{
    public int? Balance { get; set; }

    public string Note { get; set; }
}