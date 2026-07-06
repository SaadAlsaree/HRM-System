namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwner;

public class GetDepartmentOwnerQuery : IRequest<Response<PagedResult<GetDepartmentOwnerViewModel>>>
{
    public int? DepartmentId { get; set; }
    public Guid? EmployeeId { get; set; }
    public bool? IsActive { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; } = 10;
}
