namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetInterruptionExcelFile;
public class GetInterruptionExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}