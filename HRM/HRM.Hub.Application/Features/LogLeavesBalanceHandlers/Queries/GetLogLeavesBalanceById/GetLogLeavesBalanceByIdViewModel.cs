namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetLogLeavesBalanceById;
public class GetLogLeavesBalanceByIdViewModel:BaseViewModel<Guid>
{
    public int? CountOfDay { get; set; }

    public string NameOfIssuing { get; set; }

    public string BookNo { get; set; }

    public DateOnly? BookDate { get; set; }

    public string Note { get; set; }
}