namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWoundedExcelFile;

public class GetMartyrsAndWoundedExcelFileQuery : IRequest<Response<byte[]>>
{
    public HealthStatus HealthStatus { get; set; }
    public Guid EmployeeId { get; set; }
}