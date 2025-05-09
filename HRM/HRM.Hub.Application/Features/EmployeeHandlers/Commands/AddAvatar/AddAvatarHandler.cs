namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddAvatar;
public class AddAvatarHandler : CreateHandler<Attachments, AddAvatarCommand>,
        IRequestHandler<AddAvatarCommand, Response<bool>>
{
    private readonly IStorageService _storageService;
    private readonly Guid _attachmentId;
    private byte[] _key;
    private byte[] _iv;
    private readonly IBaseRepository<Attachments> _repositoryAttachments;
    public AddAvatarHandler(IBaseRepository<Attachments> repositoryAttachments, IStorageService storageService)
        : base(repositoryAttachments)
    {
        _attachmentId = Guid.NewGuid();
        _repositoryAttachments = repositoryAttachments ?? throw new ArgumentNullException(nameof(repositoryAttachments));
        _storageService = storageService ?? throw new ArgumentNullException(nameof(storageService));
    }

    protected override Expression<Func<Attachments, bool>> ExistencePredicate(AddAvatarCommand request) => null;

    protected override Attachments MapToEntity(AddAvatarCommand request)
    {
        return new Attachments
        {
            Id = _attachmentId,
            PrimaryTableId = request.EmployeeId,
            Tags = JsonConvert.SerializeObject(new AttachmentProperty() { BookDate = DateOnly.FromDateTime(DateTime.Now),BookNo = "غير محدد",BookTitle = "صورة شخصية" }),
            TableName = TableNames.Avatar.ToString(),
            ExtinctionFile = request.File.GetFileExtension(),
            Secret = JsonConvert.SerializeObject(new AttachmentSetting { Key = _key, IV = _iv }),
            Notes = "لا توجد ملاحظات",
            CreateBy = request.CreateBy,
        };
    }

    public async Task<Response<bool>> Handle(AddAvatarCommand request, CancellationToken cancellationToken)
    {
        var getAttachments = await _repositoryAttachments.GetAsync(x => x.PrimaryTableId == request.EmployeeId && x.TableName == TableNames.Avatar.ToString() && x.IsDeleted == false);
        getAttachments.ToList().ForEach(x => x.IsDeleted = true);
        await _repositoryAttachments.UpdateRange(getAttachments, cancellationToken: cancellationToken);

        (_key, _iv) = _storageService.UploadFileAsync(await request.File.ConvertIFormFileToByteArray(),
           $"{_attachmentId}{request.File.GetFileExtension()}", request.EmployeeId.ToString());



        return await HandleBase(request, cancellationToken);
    }
}