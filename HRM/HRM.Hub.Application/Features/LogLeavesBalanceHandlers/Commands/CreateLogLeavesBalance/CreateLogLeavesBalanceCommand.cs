namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.CreateLogLeavesBalance;
public sealed record CreateLogLeavesBalanceCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public int? CountOfDay { get; set; }

    public string NameOfIssuing { get; set; }

    public string BookNo { get; set; }

    public DateOnly? BookDate { get; set; }

    public string Note { get; set; }

    public Guid? CreateBy { get; set; }
}