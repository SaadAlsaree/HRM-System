namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationExcelFile;
public class GetManagementInformationExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}