namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInfoExcelFile;
public class GetContactInfoExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}