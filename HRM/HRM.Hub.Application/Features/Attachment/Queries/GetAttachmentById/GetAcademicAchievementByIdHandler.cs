
namespace HRM.Hub.Application.Features.Attachment.Queries.GetAttachmentById;
public class GetAttachmentByIdHandler : IRequestHandler<GetAttachmentByIdQuery, Response<GetAttachmentByIdViewModel>>
{
    private readonly IBaseRepository<Attachments> _repositoryAttachment;
    private readonly IStorageService _storageService;
    public GetAttachmentByIdHandler(IBaseRepository<Attachments> repositoryAttachment, IStorageService storageService)
    {
        _repositoryAttachment = repositoryAttachment ?? throw new ArgumentNullException(nameof(repositoryAttachment));
        _storageService = storageService ?? throw new ArgumentNullException(nameof(storageService));
    }
    public async Task<Response<GetAttachmentByIdViewModel>> Handle(GetAttachmentByIdQuery request, CancellationToken cancellationToken)
    {
        var result = await _repositoryAttachment.Find(z => z.Id == request.AttachmentId && z.IsDeleted == false, cancellationToken: cancellationToken);
        if (result == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetAttachmentByIdViewModel>(null);

        var secret = JsonConvert.DeserializeObject<AttachmentSetting>(result.Secret);
        var getFile = _storageService.DownloadFile($"{result.Id}{result.ExtinctionFile}", request.EmployeeId.ToString(), secret.Key, secret.IV);
        return SuccessMessage.Get.ToSuccessMessage(new GetAttachmentByIdViewModel()
        {
            FileBase64 = getFile.ToBase64(),
            ExtinctionFile = result.ExtinctionFile
        });
    }
}
