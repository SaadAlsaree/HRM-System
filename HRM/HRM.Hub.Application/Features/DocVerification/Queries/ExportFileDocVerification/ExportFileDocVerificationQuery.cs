namespace HRM.Hub.Application.Features.DocVerification.Queries.ExportFileDocVerification;
public class ExportFileDocVerificationQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}