namespace HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
public class GetAttachmentViewModel 
{
    public Guid Id { get; set; }
    public object AttachmentProperty { get; set; }
    [JsonIgnore]
    public string Tags { get; set; }
    public string Notes { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}