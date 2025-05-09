namespace HRM.Hub.Application.Features.Valuations.Queries.GetValuationExcelFile;

public class GetValuationExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}