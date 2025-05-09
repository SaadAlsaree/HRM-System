namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationExcelFile;
public class GetAddressInfoExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}