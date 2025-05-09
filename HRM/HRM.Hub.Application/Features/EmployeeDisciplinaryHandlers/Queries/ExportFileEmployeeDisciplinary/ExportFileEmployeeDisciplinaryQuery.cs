namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.ExportFileEmployeeDisciplinary;
public sealed record ExportFileEmployeeDisciplinaryQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}