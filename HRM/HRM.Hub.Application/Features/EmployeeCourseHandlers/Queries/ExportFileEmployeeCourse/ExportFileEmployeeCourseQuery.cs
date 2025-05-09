namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.ExportFileEmployeeCourse;
public sealed record ExportFileEmployeeCourseQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}