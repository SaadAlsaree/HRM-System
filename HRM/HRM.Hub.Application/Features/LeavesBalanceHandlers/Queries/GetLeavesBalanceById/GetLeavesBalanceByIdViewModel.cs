namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalanceById;

public class GetLeavesBalanceByIdViewModel : BaseViewModel<Guid>
{
    public int? Balance { get; set; }

    public string Note { get; set; }
}