namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceExcelFile;
public class GetEmployeeServiceExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}