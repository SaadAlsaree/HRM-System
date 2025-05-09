using HRM.Hub.Application.Helper;
using Swashbuckle.AspNetCore.Annotations;

namespace HRM.Hub.Application.Features.Attachment.Commands.UpdateAttachment;

public class UpdateAttachmentCommend : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    [SwaggerIgnore]
    public AttachmentProperty AttachmentProperty { get; set; }
    [SwaggerSchema(ReadOnly = true)]
    public string Tags { get; set; } 
    public string TableName { get; set; }
    public string Notes { get; set; }
    public Guid? LastUpdateBy { get; set; }
}