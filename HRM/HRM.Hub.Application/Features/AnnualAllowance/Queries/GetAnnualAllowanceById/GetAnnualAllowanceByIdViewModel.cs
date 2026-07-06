using HRM.Hub.Application.Contracts;

namespace HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowanceById;

public class GetAnnualAllowanceByIdViewModel : BaseViewModel<Guid>
{
    public Guid EmployeeId { get; set; }
    public DateOnly DueDate { get; set; }
    public DateOnly? ImplementationDate { get; set; }
    public int BonusTypeId { get; set; }
    public string? ReasonForAmendment { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateOnly AdministrativeOrderDate { get; set; }
    public int AnnualAllowanceStatus { get; set; }
    public Guid UserId { get; set; }
    public DateTime EnteredDate { get; set; }
    public Guid? CalculationRunId { get; set; }
}
