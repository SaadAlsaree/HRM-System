namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.GetAllEmployeeCourses;
public sealed record GetAllEmployeeCoursesQuery : IRequest<Response<PagedResult<GetAllEmployeeCoursesViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page {  get; set; }
    public byte PageSize {  get; set; }
}