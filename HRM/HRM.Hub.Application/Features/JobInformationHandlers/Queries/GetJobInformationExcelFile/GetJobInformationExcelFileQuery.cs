namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationExcelFile;
public class GetJobInformationExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}