namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullExcelFile;
public class GetHandPullExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}