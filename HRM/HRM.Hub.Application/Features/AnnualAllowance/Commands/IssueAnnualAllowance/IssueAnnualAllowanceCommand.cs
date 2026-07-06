using HRM.Hub.Application.Contracts;

namespace HRM.Hub.Application.Features.AnnualAllowance.Commands.IssueAnnualAllowance;

public class IssueAnnualAllowanceCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public int BonusTypeId { get; set; }
    public string? ReasonForAmendment { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateOnly AdministrativeOrderDate { get; set; }
    public Guid? CreateBy { get; set; }
}