using Swashbuckle.AspNetCore.Annotations;

namespace HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;

public class CreateAttachmentCommend : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public Guid PrimaryTableId { get; set; }
    public IFormFile File { get; set; }
    [SwaggerSchema(ReadOnly = true)]
    public TableNames TableName { get; set; }
    public AttachmentProperty Tags { get; set; }
    public string Notes { get; set; }
    public Guid? CreateBy { get; set; }
}

