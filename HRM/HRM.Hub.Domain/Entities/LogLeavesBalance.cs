using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class LogLeavesBalance: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int? CountOfDay { get; set; }

    public string NameOfIssuing { get; set; }

    public string BookNo { get; set; }
    public LeaveTypes TypeOfLeaveId { get; set; }
    public DateOnly? BookDate { get; set; }

    public string Note { get; set; }
    public virtual Employees Employee { get; set; }
}
