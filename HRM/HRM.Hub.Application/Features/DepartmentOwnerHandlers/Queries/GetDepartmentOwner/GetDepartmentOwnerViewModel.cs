namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwner;

public class GetDepartmentOwnerViewModel
{
    public Guid Id { get; set; }
    public int DepartmentId { get; set; }
    public string DepartmentName { get; set; }
    public Guid EmployeeId { get; set; }
    public string EmployeeName { get; set; }
    public string JobCode { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public bool IsActive { get; set; }
}
