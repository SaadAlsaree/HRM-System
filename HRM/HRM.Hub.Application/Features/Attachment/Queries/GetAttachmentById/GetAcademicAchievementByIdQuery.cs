namespace HRM.Hub.Application.Features.Attachment.Queries.GetAttachmentById;

public class GetAttachmentByIdQuery : IRequest<Response<GetAttachmentByIdViewModel>>
{
    public Guid AttachmentId { get; set; }
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

}