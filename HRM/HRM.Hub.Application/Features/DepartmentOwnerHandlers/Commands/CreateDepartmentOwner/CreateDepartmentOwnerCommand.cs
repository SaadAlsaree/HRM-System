namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.CreateDepartmentOwner;

public class CreateDepartmentOwnerCommand : IRequest<Response<bool>>
{
    public int DepartmentId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public bool IsActive { get; set; } = true;
}
