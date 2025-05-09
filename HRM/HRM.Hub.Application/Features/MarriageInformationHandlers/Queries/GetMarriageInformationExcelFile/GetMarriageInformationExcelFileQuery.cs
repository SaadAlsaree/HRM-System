namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformationExcelFile;
public class GetMarriageInformationExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}