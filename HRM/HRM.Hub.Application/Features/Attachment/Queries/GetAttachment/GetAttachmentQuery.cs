namespace HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;

public class GetAttachmentQuery : IRequest<Response<IEnumerable<GetAttachmentViewModel>>>
{
    public Guid EmployeeId { get; set; }
    public Guid PrimaryTableId { get; set; }
    public Status Status { get; set; } = Status.None;

}
