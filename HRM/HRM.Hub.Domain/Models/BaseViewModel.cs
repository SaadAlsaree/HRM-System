using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Models;
public class BaseViewModel<T>
{
    public T Id { get; set; }
    public Guid EmployeeId { get; set; }
    public string FullName { get; set; }
    public string JobCode { get; set; }
    public string LotNumber { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}