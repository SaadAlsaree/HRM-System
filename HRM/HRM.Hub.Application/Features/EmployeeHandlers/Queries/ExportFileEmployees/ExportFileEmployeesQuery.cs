namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.ExportFileEmployees;
public sealed record ExportFileEmployeesQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}