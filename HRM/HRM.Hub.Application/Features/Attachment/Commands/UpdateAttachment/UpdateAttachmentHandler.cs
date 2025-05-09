namespace HRM.Hub.Application.Features.Attachment.Commands.UpdateAttachment
{
    public class UpdateAttachmentHandler :
        UpdateHandler<Attachments, UpdateAttachmentCommend>,
        IRequestHandler<UpdateAttachmentCommend, Response<bool>>
    {
        public UpdateAttachmentHandler(IBaseRepository<Attachments> repositoryAttachment)
            : base(repositoryAttachment)
        {
        }

        public override Expression<Func<Attachments, bool>>
            EntityPredicate(UpdateAttachmentCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAttachmentCommend request,
            CancellationToken cancellationToken)
        {
            request.Tags = JsonConvert.SerializeObject(request.AttachmentProperty);
            request.AttachmentProperty = null;
            return await HandleBase(request, cancellationToken);
        }
    }
}