namespace HRM.Hub.Application.Features.EmployeeDocument.Commands.UpdateEmployeeDocument;
public class UpdateDocumentHandler :
        UpdateHandler<EmployeeDocuments, UpdateDocumentCommand>,
        IRequestHandler<UpdateDocumentCommand, Response<bool>>
{
    public UpdateDocumentHandler(IBaseRepository<EmployeeDocuments> repositoryDocument)
        : base(repositoryDocument)
    {
    }

    public override Expression<Func<EmployeeDocuments, bool>>
        EntityPredicate(UpdateDocumentCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateDocumentCommand request,
        CancellationToken cancellationToken)
    {
        request.DocumentAttribute = JsonConvert.SerializeObject(request.DocumentAttributes);

        return await HandleBase(request, cancellationToken);
    }
}
