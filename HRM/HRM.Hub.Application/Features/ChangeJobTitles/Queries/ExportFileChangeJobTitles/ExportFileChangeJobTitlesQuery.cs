namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.ExportFileChangeJobTitles;
public class ExportFileChangeJobTitlesQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}