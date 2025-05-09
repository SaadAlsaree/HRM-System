namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.UpdateLogLeavesBalance;
public sealed record UpdateLogLeavesBalanceCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }

    public int? CountOfDay { get; set; }

    public string NameOfIssuing { get; set; }

    public string BookNo { get; set; }

    public DateOnly? BookDate { get; set; }

    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
    
}