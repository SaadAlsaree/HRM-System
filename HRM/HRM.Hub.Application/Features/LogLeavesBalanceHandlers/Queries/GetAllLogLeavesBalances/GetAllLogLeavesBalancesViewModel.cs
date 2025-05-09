namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetAllLogLeavesBalances;
public class GetAllLogLeavesBalancesViewModel:BaseViewModel<Guid>
{
    public int? CountOfDay { get; set; }
    public string NameOfIssuing { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public string Note { get; set; }
}