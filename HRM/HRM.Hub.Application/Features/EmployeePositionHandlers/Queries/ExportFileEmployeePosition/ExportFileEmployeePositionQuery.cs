namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.ExportFileEmployeePosition;
public sealed record ExportFileEmployeePositionQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}