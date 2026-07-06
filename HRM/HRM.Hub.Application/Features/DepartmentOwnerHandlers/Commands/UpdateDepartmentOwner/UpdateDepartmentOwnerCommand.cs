namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.UpdateDepartmentOwner;

public class UpdateDepartmentOwnerCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public int DepartmentId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public bool IsActive { get; set; }
}
