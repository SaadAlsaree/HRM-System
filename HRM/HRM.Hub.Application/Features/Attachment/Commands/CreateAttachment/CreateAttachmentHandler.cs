namespace HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
public class CreateAttachmentHandler : CreateHandler<Attachments, CreateAttachmentCommend>,
        IRequestHandler<CreateAttachmentCommend, Response<bool>>
{
    private readonly IStorageService _storageService;
    private readonly Guid _attachmentId;
    private byte[] _key;
    private byte[] _iv;
    public CreateAttachmentHandler(IBaseRepository<Attachments> repositoryAttachments, IStorageService storageService)
        : base(repositoryAttachments)
    {
        _attachmentId = Guid.NewGuid();
        _storageService = storageService ?? throw new ArgumentNullException(nameof(storageService));
    }

    protected override Expression<Func<Attachments, bool>> ExistencePredicate(CreateAttachmentCommend request) => null;

    protected override Attachments MapToEntity(CreateAttachmentCommend request)
    {
        return new Attachments
        {
            Id = _attachmentId,
            PrimaryTableId = request.PrimaryTableId,
            Tags = JsonConvert.SerializeObject(request.Tags),
            TableName = request.TableName.ToString(),
            ExtinctionFile = request.File.GetFileExtension(),
            Secret = JsonConvert.SerializeObject(new AttachmentSetting { Key = _key, IV = _iv }),
            Notes = request.Notes,
            CreateBy = request.CreateBy,
        };
    }

    public async Task<Response<bool>> Handle(CreateAttachmentCommend request, CancellationToken cancellationToken)
    {
        (_key, _iv) = _storageService.UploadFileAsync(await request.File.ConvertIFormFileToByteArray(),
           $"{_attachmentId}{request.File.GetFileExtension()}", request.EmployeeId.ToString());
        return await HandleBase(request, cancellationToken);
    }
}