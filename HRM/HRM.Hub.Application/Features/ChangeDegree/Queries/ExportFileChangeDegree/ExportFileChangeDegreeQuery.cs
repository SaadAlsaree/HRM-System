namespace HRM.Hub.Application.Features.ChangeDegree.Queries.ExportFileChangeDegree;
public class ExportFileChangeDegreeQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
}
