namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetMovementExcelFile;

public class GetMovementExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}