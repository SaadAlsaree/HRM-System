namespace HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
public class GetAttachmentHandler : IRequestHandler<GetAttachmentQuery, Response<IEnumerable<GetAttachmentViewModel>>>
{
    private readonly IBaseRepository<Attachments> _repositoryAttachment;
    public GetAttachmentHandler(IBaseRepository<Attachments> repositoryAttachment)
    {
        _repositoryAttachment = repositoryAttachment ?? throw new ArgumentNullException(nameof(repositoryAttachment));
    }
    public async Task<Response<IEnumerable<GetAttachmentViewModel>>> Handle(GetAttachmentQuery request, CancellationToken cancellationToken)
    {
        var (result, count) = await _repositoryAttachment.GetAsync(filter:z=>z.PrimaryTableId == request.PrimaryTableId
        && z.IsDeleted == false,selector: z => new GetAttachmentViewModel()
        {
            Id = z.Id,
            Notes = z.Notes,
            Tags = z.Tags,
            Status = z.StatusId,

        }, orderBy: order => order.OrderBy(z => z.Id), cancellationToken: cancellationToken);

        if (!result.Any())
            return ErrorsMessage.NotFoundData.ToErrorMessage<IEnumerable<GetAttachmentViewModel>>(null);

        result.ToList().ForEach(x =>
        {
            x.AttachmentProperty = JsonConvert.DeserializeObject(x.Tags);
            x.StatusName = x.Status.GetDisplayName();
        });

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}