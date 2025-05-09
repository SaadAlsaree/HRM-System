namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeExcelFile;
public class GetAdministrativeExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}