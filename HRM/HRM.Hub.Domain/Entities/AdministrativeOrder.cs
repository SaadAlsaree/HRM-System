using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class AdministrativeOrder : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly OrderDate { get; set; }
    public string BookTitle { get; set; }
    public AdministrativeOrderEnum AdministrativeOrderType { get; set; }
    public virtual Employees Employee { get; set; }
}
